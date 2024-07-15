full() {
  spaces_counts=(5 3 2)
  for i in $(seq 0 $((${#spaces_counts[@]} - 1))); do
    current_spaces=$(yabai -m query --displays | jq -r ".[$i].spaces | length")
    spaces_diff=$((spaces_counts[i] - current_spaces))

    if [ $spaces_diff -gt 0 ]; then
      for (( j=0; j<$spaces_diff; j++ )); do
        yabai -m space --create $((i + 1))
      done
    elif [ $spaces_diff -lt 0 ]; then
      for (( j=0; j<-${spaces_diff}; j++ )); do
        yabai -m space --destroy $((i + 1))
      done
    fi
  done


}

half() {
  spaces_counts=(5 5)
  for i in $(seq 0 $((${#spaces_counts[@]} - 1))); do
    current_spaces=$(yabai -m query --displays | jq -r ".[$i].spaces | length")
    spaces_diff=$((spaces_counts[i] - current_spaces))

    if [ $spaces_diff -gt 0 ]; then
      for (( j=0; j<$spaces_diff; j++ )); do
        yabai -m space --create $((i + 1))
      done
    elif [ $spaces_diff -lt 0 ]; then
      for (( j=0; j<-${spaces_diff}; j++ )); do
        yabai -m space --destroy $((i + 1))
      done
    fi
  done

  yabai -m space --focus 8
  yabai -m rule --add app="^Spotify$" space=8
  open -a "Spotify"
  yabai -m rule --add --one-shot app="^WezTerm$" space=8
  open -na "WezTerm" --args start zsh -c cava
  BLK="03" CHR="03" DIR="04" EXE="02" REG="07" HARDLINK="05" SYMLINK="05" MISSING="08" ORPHAN="01" FIFO="06" SOCK="03" UNKNOWN="01"
  export NNN_COLORS="#04020301;4231"
  export NNN_FCOLORS="$BLK$CHR$DIR$EXE$REG$HARDLINK$SYMLINK$MISSING$ORPHAN$FIFO$SOCK$UNKNOWN"
  yabai -m rule --add --one-shot app="^WezTerm$" space=8
  open -na "WezTerm" --args start zsh -c nnn 

  yabai -m rule --add app="^Discord$" space=9
  open -a "Discord"
  yabai -m rule --add --one-shot app="^Firefox$" space=9
  open -na "Firefox" --args --kiosk -new-window "https://mail.google.com"
  yabai -m rule --add app="^Obsidian$" space=10
  open -a "Obsidian"

  yabai -m rule --apply

  yabai -m space --focus 1
  yabai -m space --focus 2
  yabai -m space --focus 3
  yabai -m space --focus 4
  yabai -m space --focus 5
  yabai -m space --focus 6
  yabai -m space --focus 7
  yabai -m space --focus 8
  yabai -m space --focus 9
  yabai -m space --focus 10
  yabai -m space --focus 1
}

none() {
  space_count=(9)
  current_spaces=$(yabai -m query --displays | jq -r ".[$i].spaces | length")
  spaces_diff=$((space_counts - current_spaces))

  if [ $spaces_diff -gt 0 ]; then
    for (( j=0; j<$spaces_diff; j++ )); do
      yabai -m space --create $((i + 1))
    done
  elif [ $spaces_diff -lt 0 ]; then
    for (( j=0; j<-${spaces_diff}; j++ )); do
      yabai -m space --destroy $((i + 1))
    done
  fi
}

display_count=$(yabai -m query --displays | jq '. | length')
if [ $display_count == 3 ]; then
  full
elif [ $display_count == 2 ]; then
  half
else
  none
fi
