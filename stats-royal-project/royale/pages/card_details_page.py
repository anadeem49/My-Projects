from typing import Tuple

from selenium.webdriver.common.by import By
from selenium.webdriver.remote.webelement import WebElement

from royale.models.card import Card
from royale.pages.base.pagebase import PageBase


class CardDetailsPageMap:
    def __init__(self, driver):
        self.driver = driver;

    @property
    def card_name(self) -> WebElement:
        return self._driver.find_element(By.CSS_SELECTOR, "[class*='cardName']");

    @property
    def card_category(self) -> WebElement:
        return self._driver.find_element(By.CSS_SELECTOR, "[class*='card__rarity']");

    @property
    def card_rarity(self) -> WebElement:
        return self._driver.find_element(By.CSS_SELECTOR, "[class*='rarityCaption']");


class CardDetailsPage(PageBase):
    def __init__(self, driver):
        super().__init__(driver);
        self.map = CardDetailsPageMap(driver);

    def get_base_card(self) -> Card:
        type_and_arena = self.get_card_type_and_arena();
        return Card(
            name=self.map.card_name.text,
            type=type_and_arena[0],
            arena=type_and_arena[1],
            rarity=self.map.card_rarity.text.split('\n')[-1]
        )

    def get_card_type_and_arena(self) -> Tuple[str, int]:
        type_and_arena = self.map.card_category.text.split(', ');
        card_type = type_and_arena[0];
        card_arena = type_and_arena[1].split('')[-1];
        return card_type, int(card_arena);
