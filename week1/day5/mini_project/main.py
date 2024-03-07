print("Welcome to Tic-Tac-Toe!")

import tkinter as tk

def display_board(board):
    root = tk.Tk()
    root.title("Display Board")

    for i in range(len(board)):
        for j in range(len(board[i])):
            label = tk.Label(root, text=board[i][j], padx=10, pady=5, relief=tk.RIDGE)
            label.grid(row=i, column=j)

    root.mainloop()

# Exemple de grille
board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    [' ', ' ', 'X']
]

display_board(board)
















# import tkinter as tk
# from tkinter import messagebox

# window = tk.Tk()
# window.title("Tic Tac Toe")


# def create_board():
#     for i in range(3):
#         for j in range(3):
#             button = tk.Button(window, text="", font=("Arial", 50), height=2, width=6, bg="lightblue", command=lambda row=i, col=j: handle_click(row, col))
#             button.grid(row=i, column=j, sticky="nsew")

# create_board()

# def displaye_board():
#     dashboard = QWebView()
#     dashboard.load("dashboard.html")
#     dashboard.show()
    
    





















# grid=[[' ',' ',' '],
#       [' ',' ',' '],
#       [' ',' ',' '],]

# player1=input('player1 placement: ')
# player2=input('player2 placement: ')
# def game(player1,player2):
#     while True:
#         print(player1)
#         player1.replace
#         grid=[[' ',' ',' '],
#         [' ',' ',' '],
#         [' ',' ',' '],]
#         for rows in grid:
#             print(rows)

        







for rows in grid:
    print(rows)
# print(grid)