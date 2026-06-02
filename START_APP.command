#!/bin/zsh

set -e

cd "$(dirname "$0")"

PORT=4188
URL="http://127.0.0.1:${PORT}/"
LOG_FILE="${TMPDIR:-/tmp}/opening-habit-server.log"

is_opening_habit_running() {
  curl --silent --max-time 1 "$URL" | grep --quiet "<title>Opening Habit</title>"
}

if ! is_opening_habit_running; then
  if lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
    echo "Port ${PORT} is already in use by another app."
    echo "Close that app, then double-click START_APP.command again."
    read "?Press Return to close this window..."
    exit 1
  fi

  nohup python3 -m http.server "$PORT" --bind 127.0.0.1 >"$LOG_FILE" 2>&1 &

  for _ in {1..30}; do
    if is_opening_habit_running; then
      break
    fi
    sleep 0.1
  done
fi

if ! is_opening_habit_running; then
  echo "Opening Habit could not start."
  echo "Details were saved to: $LOG_FILE"
  read "?Press Return to close this window..."
  exit 1
fi

if [[ "${OPENING_HABIT_NO_OPEN:-0}" != "1" ]]; then
  open "$URL"
fi

echo "Opening Habit is ready at $URL"

