import psycopg2
import config

class MenuItem: 
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def connect(self):
        conn = psycopg2.connect(
            dbname=config.DATABASE,
            user=config.USERNAME,
            password=config.PASSWORD,
            host=config.HOSTNAME
        )
        return conn

    def save(self):
        conn = self.connect()
        cursor = conn.cursor()
        query = f'''
            INSERT INTO menu_items (item_name, item_price)
            VALUES ('{self.name}', {self.price})
        '''
        cursor.execute(query)
        conn.commit()
        cursor.close()
        conn.close()

    def delete(self):
        conn = self.connect()
        cursor = conn.cursor()
        query = f"DELETE FROM menu_items WHERE item_name = '{self.name}'"
        cursor.execute(query)
        conn.commit()
        cursor.close()
        conn.close()

    def update(self, new_name, new_price):
        conn = self.connect()
        cursor = conn.cursor()
        query = f'''
            UPDATE menu_items 
            SET item_name = '{new_name}', item_price = {new_price} 
            WHERE item_name = '{self.name}'
        '''
        cursor.execute(query)
        conn.commit()
        cursor.close()
        conn.close()


item = MenuItem('Burger', 35)
# item.save()
# item.delete()
# item.update('Veggie Burger', 37)

