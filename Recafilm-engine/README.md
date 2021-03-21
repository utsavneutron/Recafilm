# Recommendation-API-for-movies
 Movie Recommendation API that can be used by anyone to provide relevant movie suggestions to their users in an app or a website.
 
 __Content-Based recommendation works on the principle that if a user likes a certain item then we recommend the user a similar item based on the item’s features or attributes. So in our case, if a user likes a movie of a particular genre or an actor then we recommend a movie on similar lines to our user. So, if a user has watched the movie Joker then our recommendation system would predict movies similar to Joker or with the same cast as that of Joker if we consider the movie’s cast.__
 
 __An object was made for CountVectorizer and initiate to remove English stopwords using the stop_words parameter. Then, CountVectorizer object was fit to count onto the value returned by combine_data() i.e. combined column values of cast and genres. After this,a sparse matrix as shown in our discussion about Bag-of-Words appeared with the count values of each word. After that, an object was made for TfidfVectorizer and initiated to remove English stopwords using the stop_words parameter.__

## Infrastructures used:

* [Python 2.7](https://www.python.org/download/releases/2.7/) or [Python 3.6](https://www.python.org/downloads/release/python-360/)
* [Jupyter Notebook](http://jupyter.org/)

## Dependencies:

* [pandas](https://pandas.pydata.org/)
* [numpy](http://www.numpy.org/)
* [scipy](https://www.scipy.org/)
* [matplotlib](https://matplotlib.org/)
* [sklearn](http://scikit-learn.org/stable/)
* [wordcloud](https://github.com/amueller/word_cloud)
* [searborn](https://seaborn.pydata.org/)
* [surprise](http://surpriselib.com/)
* [keras](https://keras.io/)
* [h5py](https://www.h5py.org/)

## License

MIT. See the LICENSE file for the copyright notice.

