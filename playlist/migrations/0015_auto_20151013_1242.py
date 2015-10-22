# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('playlist', '0014_auto_20151013_0950'),
    ]

    operations = [
        migrations.RenameField(
            model_name='playlist',
            old_name='show',
            new_name='showname',
        ),
    ]
