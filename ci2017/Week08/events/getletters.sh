url="http://asluniversity.com/asl101/fingerspelling/abc-gifs"
for i in {a..z}; do
    #echo "$url/$i.gif"
    curl "$url/$i.gif" >> images/asl_$i.gif
done
