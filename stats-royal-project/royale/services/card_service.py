from royale.models.card import Card
from typing import List
import requests


def get_all_cards() -> List[Card]:
    response = requests.get('https://statsroyale.com/api/cards')
    if response.ok:
        return [Card(**card) for card in response.json()]
    else:
        raise Exception("Response was not okay, Status code: " + response.status_code);


def get_card_by_name(card_name: str) -> Card:
    cards = get_all_cards()
    return next(card for card in cards if card.name == card_name);
