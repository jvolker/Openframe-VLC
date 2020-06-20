#!/bin/bash
#
# Be VERY Careful. This script may be executed with admin privileges.

echo "Installing VLC extension ..."

if ! [ -z "$TRAVIS" ]; then
    echo "TRAVIS env, don't install"
    exit 0
fi

os=$(uname)
arq=$(uname -m)

if [ $os == "Linux" ]; then

    # on Linux distributions
    # on RaspberryPi
    if [ $arq == "armv7l" ]; then
      # TODO: install VLC if not already installed
      # sudo apt install vlc
      
      echo ""
    fi
elif [ $os == "Darwin" ]; then

    # ON MacOX
    echo ""
fi
