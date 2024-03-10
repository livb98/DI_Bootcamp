board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']


def display_board():
    global board

    print(board[0] + '|', board[1] + '|', board[2] + '|')

    print(board[3] + '|', board[4] + '|', board[5] + '|')

    print(board[6] + '|', board[7] + '|', board[8] + '|')


def player_input(insertItem):
    global board
    good = False
    while good == False:
        player = int(input('Enter the index (1-9) to place your item: '))
        if 0 < player <= 9:
            if board[player-1] == ' ':
                good = True
                board[player - 1] = insertItem
                display_board()
            else:
                print("Already filled, bad input!")
                good = False
        else:
            print("Bad input, try again!")
            good = False

def check_win():
    player1 = 'X'
    player2 = 'O'
    # Check rows
    for i in range(0, 9, 3):
        if board[i] == board[i + 1] == board[i + 2] == player1 or board[i] == board[i + 1] == board[i + 2] == player2:
            return True

    # Check columns
    for i in range(3):
        if board[i] == board[i + 3] == board[i + 6] == player1 or board[i] == board[i + 3] == board[i + 6] == player2:
            return True

    # Check diagonals
    if board[0] == board[4] == board[8] == player1 or board[0] == board[4] == board[8] == player2:
        return True
    if board[2] == board[4] == board[6] == player1 or board[2] == board[4] == board[6] == player2:
        return True

    return False


def play():
    print("Welcome to the Tic Tac Toe game!")
    count = 0
    player1 = 'X' # for even step count
    player2 = 'O' # for odd step count
    while count < 9:
        if count % 2 == 0: #player 1 turn
            print("Player 1 step :insert X")
            player_input(player1)
        else:
            print("Player 2 step :insert 0")
            player_input(player2)
        if count > 3:
            win = check_win()
            if win:
                print("Congrats to")
                if count % 2 == 0:
                    print("Player 1!")
                else:
                    print("Player 2 !")
                return

            else:
                print("No winner in this game")
                print("By see you soon!")
                return
        count += 1

    print("The game is finish!")
    return

play()
