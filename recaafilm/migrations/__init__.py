from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(auto_created=True,
                                        primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, null=True)),
                ('favmovie', models.CharField(max_length=200, null=True)),
                ('favgenre', models.CharField(max_length=200, null=True)),
                ('profile_pic', models.ImageField(null=True, blank=True))
            ],
        ),
    ]
