yabai -m rule --add app="^Firefox$" space=1

yabai -m rule --add app="^Code$" space=2
yabai -m rule --add app="^Musescore$" space=2
yabai -m rule --add app="^Guitar Pro 8$" space=2

yabai -m rule --add app="^Calendar$" title="Calendar" space=4
yabai -m rule --add app="^Obsidian$" space=4

yabai -m rule --add app="^Discord$" space=5

yabai -m rule --add app="^Spotify$" space=6

open -a "Firefox"
open -a "Calendar"
open -a "Obsidian"
open -a "Discord"
open -a "Spotify"

