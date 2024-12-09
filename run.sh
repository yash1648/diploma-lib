#!/bin/zsh

# Start a new tmux session
tmux new-session -d -s dev

# Change directory to backend-api and run FastAPI in the first pane
tmux send-keys -t dev "cd ./backend-api && conda activate dev_lib && fastapi dev app.py --reload" C-m

# Create a new pane, change directory to frontend-app, and run React dev server
tmux split-window -h
tmux send-keys -t dev "cd ./frontend-app && npm run dev" C-m

# Attach to the tmux session
tmux attach -t dev
