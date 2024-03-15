from flask import Flask, request
import pytz
from datetime import datetime

app = Flask(__name__)

@app.route('/convert_timezone', methods=['GET'])
def convert_timezone():
    source_timezone = request.args.get('source_timezone')
    target_timezone = request.args.get('target_timezone')
    datetime_str = request.args.get('datetime', datetime.now().strftime('%Y-%m-%d %H:%M:%S'))

    source_tz = pytz.timezone(source_timezone)
    target_tz = pytz.timezone(target_timezone)

    source_dt = datetime.strptime(datetime_str, '%Y-%m-%d %H:%M:%S')
    source_dt = source_tz.localize(source_dt)

    target_dt = source_dt.astimezone(target_tz)

    return target_dt.strftime('%Y-%m-%d %H:%M:%S')

if __name__ == '__main__':
    app.run(debug=True)