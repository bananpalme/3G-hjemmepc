import scrapy
import pandas as pd

links = pd.read_csv('player_links.csv')
links.columns = ['link']

links = list(links.link)

class HLTVSpider(scrapy.Spider):
    name = 'ratings'
    start_urls = links

    custom_settings = {
        'DOWNLOAD_DELAY': 1,
    }


    def parse(self, response):
        yield {
            'player': response.xpath('/html/body/div[2]/div/div[2]/div[1]/div[2]/div[6]/div[2]/div[1]/h1/text()').get(),
            'ratingVersion': response.xpath('/html/body/div[2]/div/div[2]/div[1]/div[2]/div[6]/div[2]/div[2]/div[1]/div[1]/text()').get(),
            'rating': response.xpath('/html/body/div[2]/div/div[2]/div[1]/div[2]/div[6]/div[2]/div[2]/div[1]/div[2]/div[1]/text()').get(),
            'kast': response.xpath('/html/body/div[2]/div/div[2]/div[1]/div[2]/div[6]/div[2]/div[2]/div[3]/div[2]/div[1]/text()').get().rstrip('%'),
            'kpr': response.xpath('/html/body/div[2]/div/div[2]/div[1]/div[2]/div[6]/div[2]/div[3]/div[3]/div[2]/div[1]/text()').get(),
            'dpr': response.xpath('/html/body/div[2]/div/div[2]/div[1]/div[2]/div[6]/div[2]/div[2]/div[2]/div[2]/div[1]/text()').get(),
            'impact': response.xpath('/html/body/div[2]/div/div[2]/div[1]/div[2]/div[6]/div[2]/div[3]/div[1]/div[2]/div[1]/text()').get(),
            'adr': response.xpath('/html/body/div[2]/div/div[2]/div[1]/div[2]/div[6]/div[2]/div[3]/div[2]/div[2]/div[1]/text()').get(),
        }

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, r2_score, mean_squared_error

df = pd.read_csv('HLTVSpider')

y = df['rating']
X = df.drop(['rating', 'player', 'ratingVersion'], axis=1)

X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42,
                                                    test_size=0.2)

regr = LinearRegression()
regr.fit(X_train, y_train)

y_pred = regr.predict(X_test)

print(f'Coefficients: {regr.coef_}')

print(f'R2 score:{r2_score(y_test, y_pred)}')
print(f'RMSE:{mean_squared_error(y_test, y_pred, squared=False)}')
print(f'MAE:{mean_absolute_error(y_test, y_pred)}')