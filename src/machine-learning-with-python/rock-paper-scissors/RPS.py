import random
from enum import Enum
from typing import List

import joblib
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier


class MoveToInt(Enum):
    R: int = 0
    P: int = 1
    S: int = 2


def old_player(prev_play, opponent_history=[]):
    opponent_history.append(prev_play)

    guess = "R"
    if len(opponent_history) > 2:
        guess = opponent_history[-2]

    return guess


def random_choice(choice) -> str:
    if choice == "R":
        return random.choice(["P", "S"])
    if choice == "P":
        return random.choice(["R", "S"])

    return random.choice(["R", "P"])


def ml_player(prev_play, opponent_history=[]):
    x: List[List[int]] = [[0], [1], [2], [0], [0], [1], [0], [1], [2], [2]]
    y: List[int] = [1, 2, 0, 0, 1, 0, 1, 2, 2, 2]

    # if len(opponent_history) == 0:
    #    return random_choice(prev_play)

    # for opponent_move in opponent_history:
    #
    #    if opponent_move == "":
    #        return "R"
    #
    #    current_move: int = MoveToInt[prev_play].value
    #    next_move: int = MoveToInt[opponent_move].value
    #    X.append([current_move])
    #    Y.append(next_move)
    #    prev_play = opponent_move

    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2)

    ml_model = DecisionTreeClassifier()
    ml_model.fit(x_test, y_test)

    joblib.dump(ml_model, '.rock-paper-sisccors.joblib')

    predictions = ml_model.predict(x_test)

    # score = accuracy_score(y_test, predictions)


def player(prev_play, opponent_history=[]):
    ml_guess = ml_player(prev_play, opponent_history)

    print("Test", ml_guess)

    opponent_history.append(prev_play)

    return "R"
