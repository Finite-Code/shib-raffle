import requests
import random
import os

# SHIB address to monitor
raffle_address = os.getenv('RAFFLE_ADDRESS')
# Etherscan API key
etherscan_api_key = os.getenv('ETHERSCAN_API_KEY')

# Function to fetch transactions
def fetch_transactions(address):
    url = f"https://api.etherscan.io/api?module=account&action=txlist&address={address}&startblock=0&endblock=99999999&sort=asc&apikey={etherscan_api_key}"
    response = requests.get(url)
    data = response.json()
    return data["result"]

# Function to select a random winner
def select_winner(transactions):
    participants = {tx["from"] for tx in transactions if int(tx["value"]) >= 5000 * (10 ** 18)}  # 5000 SHIB in Wei
    if participants:
        return random.choice(list(participants))
    return None

# Main function
def main():
    transactions = fetch_transactions(raffle_address)
    winner = select_winner(transactions)
    if winner:
        print(f"The winner is: {winner}")
    else:
        print("No eligible participants found.")

if __name__ == "__main__":
    main()
