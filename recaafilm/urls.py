from django.urls import path
from . import views

from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.land),
    path('signup/', views.signup, name="signup"),
    path('login/', views.loginPage, name="login"),
    path('logout/', views.logoutUser, name="logout"),
    path('home/', views.home, name='home'),
    path('user/', views.userPage, name="user-page"),
    path('customer/<str:pk_test>/', views.customer, name="customer"),
    path('edituser/', views.edituser, name='edituser'),

    path('reset_password/', auth_views.PasswordResetView.as_view()),
    path('reset_password_sent/',
         auth_views.PasswordResetDoneView.as_view(
             template_name="accounts/password_reset_sent.html"),
         name="password_reset_done"),

    path('reset/<uidb64>/<token>/',
         auth_views.PasswordResetConfirmView.as_view(
             template_name="accounts/password_reset_form.html"),
         name="password_reset_confirm"),

    path('reset_password_complete/',
         auth_views.PasswordResetCompleteView.as_view(
             template_name="accounts/password_reset_done.html"),
         name="password_reset_complete"),

]
