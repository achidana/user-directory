#!/bin/bash
git add -A
echo "ENTER COMMIT MESSAGE:"
read msg
git commit -m $msg
git push



