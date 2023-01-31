import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, r2_score, mean_squared_error

df = pd.read_csv('player_links.csv')

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