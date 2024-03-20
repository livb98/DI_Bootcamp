from menu_item import MenuItem 
import psycopg2
import config


class MenuManager:
    @classmethod
    def connect(cls):
        conn = psycopg2.connect(
            dbname=config.DATABASE,
            user=config.USERNAME,
            password=config.PASSWORD,
            host=config.HOSTNAME
        )
        return conn

    @classmethod
    def get_by_name(cls, name):
        conn = cls.connect()
        cursor = conn.cursor()
        query = f"SELECT * FROM menu_items WHERE item_name = '{name}'"
        cursor.execute(query)
        record = cursor.fetchone()
        cursor.close()
        conn.close()
        if record:
            return {"name": record[1], "price": record[2]}  # Return as dictionary
        else:
            return None

    @classmethod
    def all_items(cls):
        conn = cls.connect()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM menu_items")
        records = cursor.fetchall()
        cursor.close()
        conn.close()
        return [{"name": record[1], "price": record[2]} for record in records] 
