import random


class Hilo:
    """13 cards that someone have to guess if the next card is lower or higher.

    The responsibility of Hilo is to random a card and calculate the points for 
    it.
   
    Attributes:
        value (int): The number of card.
        points (int): The number of points the user getted guessing next card starting with 300 points.
    """

    def __init__(self):
        """Constructs a new instance of Hilo.

        Args:
            self (Hilo): An instance of Hilo.
        """
        self.value = 0
        self.points = 300
        self.user = ""

    def high_low(self):
        """will get the score if the user's guess is right or not.

        Args:
            self (Hilo): An instance of Hilo.
        """    
        self.user = ""
        self.value = random.randint(1, 13)
        
        if (self.user == "h" and self.value < self.value) or (self.user == "l" and self.value > self.value):
            self.points += 100
        else:
            self.points += -75

    def play_card(self):
        """Generates a new random value.
        
        Args:
            self (Hilo): An instance of Hilo.
        """
        self.value = random.randint(1, 13)
