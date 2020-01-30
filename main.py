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

# routing for show seasons
@app.route('/tv-show/<int:show_id>')
def tv_show(show_id):
    show_details = queries.get_show_info(show_id)
    show_seasons = queries.get_show_seasons(show_id)
    return render_template('tv-show.html', show_details=show_details, show_seasons=show_seasons)





def main():
    app.run(debug=True)


if __name__ == '__main__':
    main()
