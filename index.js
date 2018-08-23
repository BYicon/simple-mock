var express = require('express')

var app = express()

var apiRoutes = express.Router()

var cors = require('cors');

var port = 4200;

// var url = require('url');

app.use(cors());

apiRoutes.get('/home/homeLoading', function(req, res) {
    //var arg = url.parse(req.url).query;
    var _json = { "data": { "classCount": { "police": { "keyValueList": [{ "key": "辅警", "value": 30 }, { "key": "网格员", "value": 30 }, { "key": "保安", "value": 120 }], "title": "警力分布" }, "alarm": { "keyValueList": [{ "key": "民生", "value": 30 }, { "key": "其他", "value": 30 }], "title": "警情统计" }, "equipment": { "keyValueList": [{ "key": "人脸摄像头", "value": 20 }, { "key": "监控", "value": 30 }, { "key": "微卡口", "value": 120 }, { "key": "WiFi探针", "value": 20 }, { "key": "其他", "value": 20 }], "title": "设备分布" }, "warning": { "keyValueList": [{ "key": "车辆预警", "value": 30 }, { "key": "人员预警", "value": 30 }, { "key": "探针预警", "value": 120 }], "title": "设备分布" } }, "ratio": { "tenement": { "dayRatio": "10%", "sum": 10, "title": "房屋", "weekRatio": "20%" }, "organization": { "$ref": "$.data.ratio.tenement" }, "personnel": { "$ref": "$.data.ratio.tenement" }, "event": { "$ref": "$.data.ratio.tenement" }, "vehicle": { "$ref": "$.data.ratio.tenement" } } }, "retCode": "00000", "retInfo": "操作成功" };
    res.json(_json);
})



app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log('listen on ' + port)
})