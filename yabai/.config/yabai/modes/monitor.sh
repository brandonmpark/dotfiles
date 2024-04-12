#!/bin/bash

yabai -m rule --add app="^Firefox$" space=6
yabai -m rule --add app="^Discord$" space=6

yabai -m rule --add app="^Code$" space=7
yabai -m rule --add app="^Musescore$" space=7
yabai -m rule --add app="^Guitar Pro 8$" space=7

yabai -m rule --add app="^Calendar$" title="Calendar" space=1
yabai -m rule --add app="^Obsidian$" space=1

yabai -m rule --add app="^Spotify$" space=2

open -a "Firefox"
open -a "Calendar"
open -a "Obsidian"
open -a "Discord"
open -a "Spotify"

# Define array of all spaces that you have
all_spaces=(8 9 10 3 4 5) # Modify based on your setup

# Get the list of windows that are currently open
open_windows=$(yabai -m query --windows | jq -r '.[] | select(.space == null) | .id')

# Initialize a counter for the spaces array
space_index=0

# Loop through each window that doesn't have a space assigned
for window in $open_windows; do
  # Assign the window to a space
  yabai -m window $window --space ${all_spaces[$space_index]}

  # Update the space index, looping back to start if needed
  space_index=$(( (space_index + 1) % ${#all_spaces[@]} ))
done


yabai -m space --focus 2
yabai -m space --focus 3
yabai -m space --focus 4
yabai -m space --focus 5
yabai -m space --focus 1
yabai -m space --focus 7
yabai -m space --focus 8
yabai -m space --focus 9
yabai -m space --focus 10
yabai -m space --focus 6

