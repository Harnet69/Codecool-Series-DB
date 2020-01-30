from flask import Flask, render_template, url_for
from data import queries

app = Flask('codecool_series')


@app.route('/')
def index():
    shows = queries.get_shows()
    return render_template('index.html', shows=shows)


@app.route('/design')
def design():
    return render_template('design.html')

# shows genres
@app.route('/genres')
def genres():
    genreslist = queries.get_genres_list()
    return render_template('genres.html', genreslist=genreslist)


# routing for getting show by genre
@app.route('/get-shows-by-genre/<show_genre>')
def get_show_by_genre(show_genre):
    shows_by_genre = queries.get_shows_by_genre(show_genre)
    # print("Flask get a data: ", shows_by_genre)
    return shows_by_genre




def main():
    app.run(debug=True)


if __name__ == '__main__':
    main()
