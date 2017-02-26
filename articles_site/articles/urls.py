from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^detail$', views.detail, name='detail'),
    url(r'^api/articles/$', views.ArticleListViewSet.as_view()),
    url(r'^api/articles/random', views.ArticleRandomViewSet.as_view()),
    url(r'^api/articles/search$', views.ArticleSearchViewSet.as_view()),
]