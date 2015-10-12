from django import template

register = template.Library()

def time_delta(value):
    toReturn = ""
    seconds = value.total_seconds()
    
    hours = int(seconds // (60*60))
    minutes = int((seconds- hours*60*60) // 60)
    second = int(seconds % 60)
    if hours > 0:
        return {'0'}.format(hours,minute,second)

    return '{:01d}:{:02d}'.format(minutes,second)



register.filter('time_delta', time_delta)
