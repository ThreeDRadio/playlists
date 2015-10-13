from django.test import TestCase
from django.template import Template, Context

from datetime import timedelta

class TimeDeltaTagTest(TestCase):
    TEMPLATE = Template("{% load time_delta %}{{value|time_delta}}");

    def setUp(self):
        pass

    def testEmptyString(self):
        rendered = self.TEMPLATE.render(Context({'value' : ''}))
        self.assertIn('0:00', rendered)
        
    def testNone(self):
        rendered = self.TEMPLATE.render(Context({'value' : None}))
        self.assertIn('0:00', rendered)

    def testSecondsOnly(self):
        date = timedelta(seconds=34)
        rendered = self.TEMPLATE.render(Context({'value' : date}))
        self.assertIn('0:34', rendered)

        date = timedelta(seconds=2)
        rendered = self.TEMPLATE.render(Context({'value' : date}))
        self.assertIn('0:02', rendered)

    def testMinutesAndSeconds(self):
        date = timedelta(minutes = 1, seconds=34)
        rendered = self.TEMPLATE.render(Context({'value' : date}))
        self.assertIn('1:34', rendered)

        date = timedelta(minutes = 21, seconds=30)
        rendered = self.TEMPLATE.render(Context({'value' : date}))
        self.assertIn('21:30', rendered)

    def testHoursMinutesSeconds(self):
        date = timedelta(hours = 4,minutes = 1, seconds=34)
        rendered = self.TEMPLATE.render(Context({'value' : date}))
        self.assertIn('4:01:34', rendered)

        date = timedelta(hours = 7, minutes = 21, seconds=30)
        rendered = self.TEMPLATE.render(Context({'value' : date}))
        self.assertIn('7:21:30', rendered)
