from selenium import webdriver
from selenium.webdriver.common.by import By


def test_google_search():
    driver = webdriver.Chrome();

    #1. go to google.com
    driver.get('https://google.com');

    #2. type in a search 'puppies'
    driver.find_element(By.NAME, 'q').send_keys('puppies');

    #3. submit or enter the search
    driver.find_element(By.NAME, 'btnK').submit();

    #4. assert that we get a search page for puppies
    assert 'puppies' in driver.title;