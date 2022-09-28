from hilo import Hilo


class Director:
    """A person who directs the game. 
    
    The responsibility of a Director is to control the sequence of play.

    Attributes:
        dice (List[Die]): A list of Die instances.
        is_playing (boolean): Whether or not the game is being played.
        score (int): The score for one round of play.
        total_score (int): The score for the entire game.
    """

    def __init__(self):
        """Constructs a new Director.
        
        Args:
            self (Director): an instance of Director.
        """
        self.hilos = []
        self.is_playing = True
        self.score = 0
        self.total_score = 0
        self.card =""

        for i in range(2):
            hilo = Hilo()
            self.hilos.append(hilo)

    def start_game(self):
        """Starts the game by running the main game loop.
        
        Args:
            self (Director): an instance of Director.
        """
        while self.is_playing:
            self.get_card()
            self.get_high_low()
            self.do_updates()
            self.do_outputs()
            self.get_inputs()
    
    def get_card(self):
        """Get the random cards
        
        Args:
            self (Director): An instance of Director.
        """
        self.card = Hilo().play_card()
        print(f"The card is: {self.card}")

    def get_high_low(self):
        """Ask user the next card is high or lower.
        
        Args:
            self (Director): An instance of Director.
        """
        high_lower = input("High or lower? [h/l] ")
        self.card = Hilo().play_card()
        print(f"Next card was: {self.card}")

    def get_inputs(self):
        """Ask the user if they want to roll.

        Args:
            self (Director): An instance of Director.
        """
        again = input("Play again? [y/n] ")
        self.is_playing = (again == "y")
       
    def do_updates(self):
        """Updates the player's score.

        Args:
            self (Director): An instance of Director.
        """
        if not self.is_playing:
            return 

        for i in range(len(self.hilos)):
            hilo = self.hilos[i]
            hilo.high_low()
            self.score += hilo.points 
        self.total_score += self.score

    def do_outputs(self):
        """Displays the dice and the score. Also asks the player if they want to roll again. 

        Args:
            self (Director): An instance of Director.
        """
        if not self.is_playing:
            return
    
        print(f"Your score is: {self.total_score}\n")
        self.is_playing == (self.score > 0)