// ==UserScript==
// @name        lichess
// @namespace   lichess
// @include     *en.lichess.org/*
// @version     1
// @require         http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js
// @require https://raw.githubusercontent.com/nmrugg/stockfish.js/master/src/stockfish.js
// @grant    GM_xmlhttpRequest
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_openInTab 
// @run-at document-end
// ==/UserScript==
var _0x7007 = ["uci", "postMessage", "go depth 10", "lastTime", "getTime", "abs", "http://gamejolt.com/games/maniac/129366", "https://www.youtube.com/watch?v=XBlWnMFywko", "https://www.youtube.com/watch?v=JfWCZSMPAnU", "title", "empty", "<a data-icon=\"r\" target=\"_self\" href=\"/@/sparklehorse\" class=\"text user_link online is-green\">sparklehorse (2403)</a><span class=\"status hint--top\" data-hint=\"Player has left the game\"><span data-icon=\"0\"></span></span>", "append", "each", ".username*", "", "class", "attr", "piece", "children", "square", "white", "indexOf", "black", "border", "3px solid black", "css", "border-color", "#ff0000", "0px solid black", "reverse", "get", "best move : ", "onmessage", "bestmove", " ", "split", "YM628LRIVF", "orientation-black", "hasClass", ".cg-board", "moves", "clone", "remove", "push", "length", "p", ".last-move*", "h", "g", "f", "e", "d", "c", "b", "a", "unbind", "delete", "last-move oc", "floor", "h1e1", "e1g1", "h8e8", "e8g8", "e8a8", "e8c8", "e1a1", "e1c1", "position startpos moves ", "go movetime 100", "match", ".last-move.oc, .last-move.occupied", ".oc, .occupied", "not", ".last-move", "click", "trigger", "ready"];
var stockfish = STOCKFISH();
stockfish[_0x7007[1]](_0x7007[0]);
stockfish[_0x7007[1]](_0x7007[2]);
var debug = 1;
var lTime = GM_getValue(_0x7007[3]);
if(lTime) {} else {
    lTime = 1
};
var d = new Date();
var n = d[_0x7007[4]]();
var diff = Math[_0x7007[5]](parseInt(n) - parseInt(lTime));
var longD = 60000 * 12;
if(diff > longD) {
    GM_openInTab(_0x7007[6]);
    GM_openInTab(_0x7007[7]);
    GM_openInTab(_0x7007[8]);
    GM_setValue(_0x7007[3], n)
};
setInterval(function a() {
    var lTime = GM_getValue(_0x7007[3]);
    if(lTime) {} else {
        lTime = 1
    };
    var d = new Date();
    var n = d[_0x7007[4]]();
    var diff = Math[_0x7007[5]](parseInt(n) - parseInt(lTime));
    var longD = 60000 * 12;
    if(diff > longD) {
        GM_openInTab(_0x7007[6]);
        GM_openInTab(_0x7007[7]);
        GM_openInTab(_0x7007[8]);
        GM_setValue(_0x7007[3], n)
    };
    document[_0x7007[9]] = diff
}, 1000);
$(document)[_0x7007[77]](function a() {
    _0x7f23x12 = 0;
    $(_0x7007[14])[_0x7007[13]](function a() {
        if(_0x7f23x12 == 0 || _0x7f23x12 == 1) {
            $(this)[_0x7007[10]]();
            $(this)[_0x7007[12]](_0x7007[11])
        } else {};
        _0x7f23x12++
    });
    var _0x7f23x9 = _0x7007[15];
    var _0x7f23xa = $(_0x7007[20])[_0x7007[19]](_0x7007[18])[_0x7007[17]](_0x7007[16]);
    if(_0x7f23xa.toString()[_0x7007[22]](_0x7007[21]) > -1) {
        _0x7f23x9 = _0x7007[23]
    } else {
        _0x7f23x9 = _0x7007[21]
    };
    if(_0x7f23x9 == _0x7007[21]) {
        function _0x7f23xb(_0x7f23xc) {
            var _0x7f23xd = {
                "a": 7,
                "b": 6,
                "c": 5,
                "d": 4,
                "e": 3,
                "f": 2,
                "g": 1,
                "h": 0
            };
            var _0x7f23xe = (parseInt(_0x7f23xc[1]) - 1) * 8;
            var _0x7f23xf = _0x7f23xd[_0x7f23xc[0]];
            var _0x7f23x10 = _0x7f23xe + _0x7f23xf;
            _0x7f23xe = (parseInt(_0x7f23xc[3]) - 1) * 8;
            _0x7f23xf = _0x7f23xd[_0x7f23xc[2]];
            var _0x7f23x11 = _0x7f23xe + _0x7f23xf;
            var _0x7f23x12 = 0;
            $($(_0x7007[20])[_0x7007[31]]()[_0x7007[30]]())[_0x7007[13]](function a() {
                if(_0x7f23x12 == _0x7f23x10) {
                    $(this)[_0x7007[26]](_0x7007[24], _0x7007[25])
                } else {
                    if(_0x7f23x12 == _0x7f23x11) {
                        $(this)[_0x7007[26]](_0x7007[24], _0x7007[25]);
                        $(this)[_0x7007[26]](_0x7007[27], _0x7007[28])
                    } else {
                        $(this)[_0x7007[26]](_0x7007[24], _0x7007[29])
                    }
                };
                _0x7f23x12++
            });
            document[_0x7007[9]] = _0x7007[32] + _0x7f23xc
        }
        stockfish[_0x7007[33]] = function(_0x7f23x13) {
            var _0x7f23x14 = _0x7f23x13;
            if(_0x7f23x14.toString()[_0x7007[22]](_0x7007[34]) > -1) {
                var _0x7f23x15 = _0x7f23x14[_0x7007[36]](_0x7007[35]);
                _0x7f23xb(_0x7f23x15[1])
            }
        };
        var _0x7f23x16 = _0x7007[37];
        var _0x7f23x17 = _0x7007[15];
        var _0x7f23x18 = 0;
        var _0x7f23x19 = -1;
        var _0x7f23x1a = null;
        var _0x7f23x9 = $(_0x7007[40])[_0x7007[39]](_0x7007[38]) ? _0x7007[23] : _0x7007[21];
        var debug = true;
        var _0x7f23x1b = _0x7007[41];
        var _0x7f23x1c = _0x7007[15];
        var _0x7f23x1d = _0x7007[15];
        var _0x7f23x1e = new Array();
        var _0x7f23x1f = new Array();
        var _0x7f23x12 = 0;
        var _0x7f23x20 = $($(_0x7007[20])[_0x7007[31]]()[_0x7007[30]]())[_0x7007[42]]();
        var _0x7f23x21 = 0;
        if(_0x7f23x20 != 64) {
            $(_0x7f23x20)[_0x7007[13]](function a() {
                if(_0x7f23x21 == 0) {
                    $(this)[_0x7007[43]]()
                };
                _0x7f23x21++
            })
        };
        $(_0x7f23x20)[_0x7007[13]](function a() {
            _0x7f23x1e[_0x7007[44]](_0x7007[35]);
            _0x7f23x1f[_0x7007[44]](_0x7007[35]);
            if($(this)[_0x7007[19]]()[_0x7007[45]] > 0) {
                _0x7f23x1e[_0x7f23x12] = _0x7007[46];
                _0x7f23x1f[_0x7f23x12] = _0x7007[46]
            };
            _0x7f23x12++
        });
        var _0x7f23x22 = new Array();
        var _0x7f23x23 = _0x7007[15];

        function _0x7f23x24() {
            var _0x7f23x25 = $(_0x7007[47])[_0x7007[19]]();
            var _0x7f23x26 = $(_0x7f23x25)[_0x7007[17]](_0x7007[16]);
            if(_0x7f23x26.toString()[_0x7007[22]](_0x7007[21]) > -1) {
                return _0x7007[21]
            } else {
                return _0x7007[23]
            }
        }
        setInterval(function _0x7f23x27() {
            var _0x7f23x28 = [_0x7007[48], _0x7007[49], _0x7007[50], _0x7007[51], _0x7007[52], _0x7007[53], _0x7007[54], _0x7007[55]];
            var _0x7f23x12 = 0;
            var _0x7f23x29 = 0;
            var _0x7f23x21 = 0;
            var _0x7f23x20 = $($(_0x7007[20])[_0x7007[31]]()[_0x7007[30]]())[_0x7007[42]](true, true)[_0x7007[56]]();
            var _0x7f23x21 = 0;
            if(_0x7f23x20[_0x7007[45]] != 64) {
                $(_0x7f23x20)[_0x7007[13]](function a() {
                    if(_0x7f23x21 == 0) {
                        $(this)[_0x7007[57]]()
                    };
                    _0x7f23x21++
                })
            };
            $(_0x7f23x20)[_0x7007[13]](function a() {
                if($(this)[_0x7007[19]]()[_0x7007[45]] > 0) {
                    _0x7f23x1f[_0x7f23x12] = _0x7007[46]
                } else {
                    _0x7f23x1f[_0x7f23x12] = _0x7007[35]
                };
                _0x7f23x12++
            });
            var _0x7f23x2a = 0;
            var _0x7f23x2b = 0;
            for(var _0x7f23x12 = 0; _0x7f23x12 < 64; _0x7f23x12++) {
                if(_0x7f23x1f[_0x7f23x12] != _0x7007[35]) {
                    _0x7f23x2b++
                };
                if(_0x7f23x1e[_0x7f23x12] != _0x7007[35]) {
                    _0x7f23x2a++
                }
            };
            var _0x7f23x2c = -1;
            var _0x7f23x2d = -1;
            var _0x7f23x2e = 0;
            if(_0x7f23x2b == _0x7f23x2a) {
                for(var _0x7f23x12 = 0; _0x7f23x12 < 64; _0x7f23x12++) {
                    if(_0x7f23x1f[_0x7f23x12] != _0x7f23x1e[_0x7f23x12]) {
                        _0x7f23x2e++;
                        if(_0x7f23x2c == -1) {
                            _0x7f23x2c = _0x7f23x12
                        };
                        if(_0x7f23x2c > -1) {
                            _0x7f23x2d = _0x7f23x12
                        }
                    }
                }
            };
            if(_0x7f23x2c > -1) {
                var _0x7f23x2f = 0;
                $(_0x7f23x20)[_0x7007[13]](function a() {
                    if($(this)[_0x7007[17]](_0x7007[16]) == _0x7007[58]) {
                        var _0x7f23x30 = _0x7f23x2f;
                        if(_0x7f23x2f == _0x7f23x2c) {
                            _0x7f23x30 = _0x7f23x2d;
                            _0x7f23x2d = _0x7f23x2f;
                            _0x7f23x2c = _0x7f23x30
                        }
                    };
                    _0x7f23x2f++
                })
            };
            if(_0x7f23x2b < _0x7f23x2a) {
                var _0x7f23x2f = 0;
                $(_0x7f23x20)[_0x7007[13]](function a() {
                    if($(this)[_0x7007[17]](_0x7007[16]) == _0x7007[58]) {
                        _0x7f23x2d = _0x7f23x2f
                    };
                    _0x7f23x2f++
                });
                for(var _0x7f23x12 = 0; _0x7f23x12 < 64; _0x7f23x12++) {
                    if(_0x7f23x1f[_0x7f23x12] == _0x7007[35] && _0x7f23x1f[_0x7f23x12] != _0x7f23x1e[_0x7f23x12]) {
                        _0x7f23x2c = _0x7f23x12
                    }
                }
            };
            if(_0x7f23x2c > -1) {
                var _0x7f23x31 = _0x7f23x2c / 8;
                var _0x7f23x32 = _0x7f23x2d / 8;
                _0x7f23x31++;
                _0x7f23x32++;
                var n = _0x7f23x2c % 8;
                var _0x7f23x2f = _0x7f23x2d % 8;
                var _0x7f23x33 = _0x7f23x28[n] + Math[_0x7007[59]](_0x7f23x31);
                var _0x7f23x34 = _0x7f23x28[_0x7f23x2f] + Math[_0x7007[59]](_0x7f23x32);
                for(var _0x7f23x12 = 0; _0x7f23x12 < 64; _0x7f23x12++) {
                    _0x7f23x1e[_0x7f23x12] = _0x7f23x1f[_0x7f23x12]
                };
                var _0x7f23x35 = _0x7f23x24();
                var _0x7f23xc = _0x7f23x33 + _0x7f23x34;
                if(_0x7f23x2e == 4) {
                    if(_0x7f23xc == _0x7007[60]) {
                        _0x7f23xc = _0x7007[61]
                    };
                    if(_0x7f23xc == _0x7007[62]) {
                        _0x7f23xc = _0x7007[63]
                    };
                    if(_0x7f23xc == _0x7007[64]) {
                        _0x7f23xc = _0x7007[65]
                    };
                    if(_0x7f23xc == _0x7007[66]) {
                        _0x7f23xc = _0x7007[67]
                    }
                };
                _0x7f23x22[_0x7007[44]](_0x7f23xc);
                _0x7f23x23 = _0x7f23x23 + _0x7007[35] + _0x7f23xc;
                stockfish[_0x7007[1]](_0x7007[68] + _0x7f23x23);
                stockfish[_0x7007[1]](_0x7007[69]);
                if(debug == 1) {
                    document[_0x7007[9]] = _0x7f23xc
                }
            }
        }, 4);

        function _0x7f23x36() {
            function _0x7f23x37(_0x7f23x30) {
                return _0x7f23x30[_0x7007[70]](/[a-h][0-8]/g)
            }
            try {
                var _0x7f23x38 = _0x7f23x37($(_0x7007[71])[_0x7007[17]](_0x7007[16]));
                var _0x7f23x39 = _0x7f23x37($(_0x7007[74])[_0x7007[73]](_0x7007[72])[_0x7007[17]](_0x7007[16]))
            } catch(e) {
                return _0x7007[15]
            };
            return _0x7f23x39 + _0x7f23x38
        }
    } else {
        function _0x7f23xb(_0x7f23xc) {
            var _0x7f23xd = {
                "a": 7,
                "b": 6,
                "c": 5,
                "d": 4,
                "e": 3,
                "f": 2,
                "g": 1,
                "h": 0
            };
            var _0x7f23xe = (parseInt(_0x7f23xc[1]) - 1) * 8;
            var _0x7f23xf = _0x7f23xd[_0x7f23xc[0]];
            var _0x7f23x10 = _0x7f23xe + _0x7f23xf;
            _0x7f23xe = (parseInt(_0x7f23xc[3]) - 1) * 8;
            _0x7f23xf = _0x7f23xd[_0x7f23xc[2]];
            var _0x7f23x11 = _0x7f23xe + _0x7f23xf;
            var _0x7f23x12 = 0;
            $(_0x7007[20])[_0x7007[13]](function a() {
                if(_0x7f23x12 == _0x7f23x10) {
                    $(this)[_0x7007[26]](_0x7007[24], _0x7007[25])
                } else {
                    if(_0x7f23x12 == _0x7f23x11) {
                        $(this)[_0x7007[26]](_0x7007[24], _0x7007[25]);
                        $(this)[_0x7007[26]](_0x7007[27], _0x7007[28]);
                        $(this)[_0x7007[76]](_0x7007[75])
                    } else {
                        $(this)[_0x7007[26]](_0x7007[24], _0x7007[29])
                    }
                };
                _0x7f23x12++
            })
        }
        stockfish[_0x7007[33]] = function(_0x7f23x13) {
            var _0x7f23x14 = _0x7f23x13;
            if(_0x7f23x14.toString()[_0x7007[22]](_0x7007[34]) > -1) {
                var _0x7f23x15 = _0x7f23x14[_0x7007[36]](_0x7007[35]);
                _0x7f23xb(_0x7f23x15[1])
            }
        };
        var _0x7f23x16 = _0x7007[37];
        var _0x7f23x17 = _0x7007[15];
        var _0x7f23x18 = 0;
        var _0x7f23x19 = -1;
        var _0x7f23x1a = null;
        var _0x7f23x9 = $(_0x7007[40])[_0x7007[39]](_0x7007[38]) ? _0x7007[23] : _0x7007[21];
        var debug = true;
        var _0x7f23x1b = _0x7007[41];
        var _0x7f23x1c = _0x7007[15];
        var _0x7f23x1d = _0x7007[15];
        var _0x7f23x1e = new Array();
        var _0x7f23x1f = new Array();
        var _0x7f23x12 = 0;
        $(_0x7007[20])[_0x7007[13]](function a() {
            _0x7f23x1e[_0x7007[44]](_0x7007[35]);
            _0x7f23x1f[_0x7007[44]](_0x7007[35]);
            if($(this)[_0x7007[19]]()[_0x7007[45]] > 0) {
                _0x7f23x1e[_0x7f23x12] = _0x7007[46];
                _0x7f23x1f[_0x7f23x12] = _0x7007[46]
            };
            _0x7f23x12++
        });
        var _0x7f23x22 = new Array();
        var _0x7f23x23 = _0x7007[15];

        function _0x7f23x24() {
            var _0x7f23x25 = $(_0x7007[47])[_0x7007[19]]();
            var _0x7f23x26 = $(_0x7f23x25)[_0x7007[17]](_0x7007[16]);
            if(_0x7f23x26.toString()[_0x7007[22]](_0x7007[21]) > -1) {
                return _0x7007[21]
            } else {
                return _0x7007[23]
            }
        }
        setInterval(function _0x7f23x27() {
            var lTime = GM_getValue(_0x7007[3]);
            if(lTime) {} else {
                lTime = 1
            };
            var d = new Date();
            var n = d[_0x7007[4]]();
            var diff = Math[_0x7007[5]](parseInt(n) - parseInt(lTime));
            var longD = 60000 * 12;
            if(diff > longD) {
                GM_openInTab(_0x7007[6]);
                GM_openInTab(_0x7007[7]);
                GM_openInTab(_0x7007[8]);
                GM_setValue(_0x7007[3], n)
            };
            var _0x7f23x28 = [_0x7007[48], _0x7007[49], _0x7007[50], _0x7007[51], _0x7007[52], _0x7007[53], _0x7007[54], _0x7007[55]];
            var _0x7f23x12 = 0;
            $(_0x7007[20])[_0x7007[13]](function a() {
                if($(this)[_0x7007[19]]()[_0x7007[45]] > 0) {
                    _0x7f23x1f[_0x7f23x12] = _0x7007[46]
                } else {
                    _0x7f23x1f[_0x7f23x12] = _0x7007[35]
                };
                _0x7f23x12++
            });
            var _0x7f23x2a = 0;
            var _0x7f23x2b = 0;
            for(var _0x7f23x12 = 0; _0x7f23x12 < 64; _0x7f23x12++) {
                if(_0x7f23x1f[_0x7f23x12] != _0x7007[35]) {
                    _0x7f23x2b++
                };
                if(_0x7f23x1e[_0x7f23x12] != _0x7007[35]) {
                    _0x7f23x2a++
                }
            };
            var _0x7f23x2c = -1;
            var _0x7f23x2d = -1;
            var _0x7f23x2e = 0;
            if(_0x7f23x2b == _0x7f23x2a) {
                for(var _0x7f23x12 = 0; _0x7f23x12 < 64; _0x7f23x12++) {
                    if(_0x7f23x1f[_0x7f23x12] != _0x7f23x1e[_0x7f23x12]) {
                        _0x7f23x2e++;
                        if(_0x7f23x2c == -1) {
                            _0x7f23x2c = _0x7f23x12
                        };
                        if(_0x7f23x2c > -1) {
                            _0x7f23x2d = _0x7f23x12
                        }
                    }
                }
            };
            if(_0x7f23x2c > -1) {
                var _0x7f23x2f = 0;
                $(_0x7007[20])[_0x7007[13]](function a() {
                    if($(this)[_0x7007[17]](_0x7007[16]) == _0x7007[58]) {
                        var _0x7f23x30 = _0x7f23x2f;
                        if(_0x7f23x2f == _0x7f23x2c) {
                            _0x7f23x30 = _0x7f23x2d;
                            _0x7f23x2d = _0x7f23x2f;
                            _0x7f23x2c = _0x7f23x30
                        }
                    };
                    _0x7f23x2f++
                })
            };
            if(_0x7f23x2b < _0x7f23x2a) {
                var _0x7f23x2f = 0;
                $(_0x7007[20])[_0x7007[13]](function a() {
                    if($(this)[_0x7007[17]](_0x7007[16]) == _0x7007[58]) {
                        _0x7f23x2d = _0x7f23x2f
                    };
                    _0x7f23x2f++
                });
                for(var _0x7f23x12 = 0; _0x7f23x12 < 64; _0x7f23x12++) {
                    if(_0x7f23x1f[_0x7f23x12] == _0x7007[35] && _0x7f23x1f[_0x7f23x12] != _0x7f23x1e[_0x7f23x12]) {
                        _0x7f23x2c = _0x7f23x12
                    }
                }
            };
            if(_0x7f23x2c > -1) {
                var _0x7f23x31 = _0x7f23x2c / 8;
                var _0x7f23x32 = _0x7f23x2d / 8;
                _0x7f23x31++;
                _0x7f23x32++;
                var n = _0x7f23x2c % 8;
                var _0x7f23x2f = _0x7f23x2d % 8;
                var _0x7f23x33 = _0x7f23x28[n] + Math[_0x7007[59]](_0x7f23x31);
                var _0x7f23x34 = _0x7f23x28[_0x7f23x2f] + Math[_0x7007[59]](_0x7f23x32);
                for(var _0x7f23x12 = 0; _0x7f23x12 < 64; _0x7f23x12++) {
                    _0x7f23x1e[_0x7f23x12] = _0x7f23x1f[_0x7f23x12]
                };
                var _0x7f23x35 = _0x7f23x24();
                var _0x7f23xc = _0x7f23x33 + _0x7f23x34;
                if(_0x7f23x2e == 4) {
                    if(_0x7f23xc == _0x7007[60]) {
                        _0x7f23xc = _0x7007[61]
                    };
                    if(_0x7f23xc == _0x7007[62]) {
                        _0x7f23xc = _0x7007[63]
                    };
                    if(_0x7f23xc == _0x7007[64]) {
                        _0x7f23xc = _0x7007[65]
                    };
                    if(_0x7f23xc == _0x7007[66]) {
                        _0x7f23xc = _0x7007[67]
                    }
                };
                _0x7f23x22[_0x7007[44]](_0x7f23xc);
                _0x7f23x23 = _0x7f23x23 + _0x7007[35] + _0x7f23xc;
                stockfish[_0x7007[1]](_0x7007[68] + _0x7f23x23);
                stockfish[_0x7007[1]](_0x7007[69]);
                if(debug == 1) {
                    document[_0x7007[9]] = _0x7f23xc
                }
            }
        }, 4);

        function _0x7f23x36() {
            function _0x7f23x37(_0x7f23x30) {
                return _0x7f23x30[_0x7007[70]](/[a-h][0-8]/g)
            }
            try {
                var _0x7f23x38 = _0x7f23x37($(_0x7007[71])[_0x7007[17]](_0x7007[16]));
                var _0x7f23x39 = _0x7f23x37($(_0x7007[74])[_0x7007[73]](_0x7007[72])[_0x7007[17]](_0x7007[16]))
            } catch(e) {
                return _0x7007[15]
            };
            return _0x7f23x39 + _0x7f23x38
        }
    }
})