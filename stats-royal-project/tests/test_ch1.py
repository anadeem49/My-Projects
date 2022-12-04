# Write a function that returns the number of vowels in
# a string parameter

def count_vowels(string):
    vowels = ['a', 'e', 'i', 'o', 'u'];
    count = 0;
    for ch in string.lower():
        if ch in vowels:
            count += 1
    return count;


def test_with_my_name():
    assert count_vowels('ahsan nadeem') == 5;


def test_with_my_uppercase_name():
    assert count_vowels('AHSAN NADEEM') == 5;
