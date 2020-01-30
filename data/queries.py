from data import data_manager
import psycopg2
from psycopg2.extensions import AsIs
import json
from data import data_manager


def get_shows():
    return data_manager.execute_select('SELECT id, title FROM shows;')

# get show more successful actors (now shows the quantity of shows where actors was participate)
def get_genres_list():
    sql_str = "SELECT name as genres FROM genres;"
    try:
        return data_manager.execute_select(sql_str)
    except psycopg2.Error as e:
        print(e)

# get shows by genre. Dump converts data to json format for JavaScript
def get_shows_by_genre(showGenre):
    sql_str = "SELECT shows.title, shows.runtime, shows.trailer, shows.homepage, shows.year, shows.rating FROM shows INNER JOIN show_genres ON shows.id=show_genres.show_id " \
              "LEFT JOIN genres ON genres.id=show_genres.genre_id WHERE genres.name = %s"
    try:
        # print(data_manager.execute_select("SELECT genres.name, shows.title, shows.year, shows.rating  FROM shows INNER JOIN show_genres ON shows.id=show_genres.show_id LEFT JOIN genres ON genres.id=show_genres.genre_id WHERE genres.name = %s", (showGenre,)));
        return json.dumps(data_manager.execute_select(sql_str, (showGenre,)), indent=4, sort_keys=True, default=str)
    except psycopg2.Error as e:
        print(e)


# get information about show seasons by usual way
def get_show_seasons(show_id):
    try:
        return data_manager.execute_select("SELECT id, title, overview FROM seasons WHERE show_id = %s", (show_id,))
    except psycopg2.Error as e:
        print(e)


# get info about show
def get_show_info(show_id):
    try:
        return data_manager.execute_select('SELECT shows.id, shows.title, shows.runtime, shows.overview, shows.trailer, shows.homepage, shows.year, shows.rating FROM shows WHERE id = %s', (show_id,))
    except psycopg2.Error as e:
        print(e)


# get info about show
def get_actor_info(actor_id):
    try:
        return data_manager.execute_select('SELECT * FROM actors WHERE id= %s', (actor_id,))
    except psycopg2.Error as e:
        print(e)


# get information about show seasons. Dump converts data to json format for JavaScript
def get_show_seasons_for_popup(show_id):
    try:
        return json.dumps(data_manager.execute_select("SELECT title FROM seasons WHERE show_id = %s", (show_id,)), indent=4, sort_keys=True, default=str)
    except psycopg2.Error as e:
        print(e)
