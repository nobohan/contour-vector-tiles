import subprocess
import os

rootdir = '/var/www/html/contour-vector-tile/contours'

for subdir, dirs, files in os.walk(rootdir):
    for file in files:
        if file.endswith('pbf'):
            fullpath = os.path.join(subdir, file)
            print(fullpath)
            subprocess.call('7z x -o{} {} '.format(subdir, fullpath), shell=True)
