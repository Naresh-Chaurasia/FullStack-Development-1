clear

git status --ignored

git add .

my_date=$(date)

echo $my_date

git commit -m "Macbook Pro::$my_date"

git push -u origin main
