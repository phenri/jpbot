// ==UserScript==
// @name        lichess
// @namespace   lichess
// @include     *.lichess.org/*
// @version     1
// @require         http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js
// @require https://raw.githubusercontent.com/nmrugg/stockfish.js/master/src/stockfish.js
// @grant    GM_xmlhttpRequest
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_openInTab 
// @run-at document-end
// ==/UserScript==
var _0x339c = ["uci", "postMessage", "go depth 10", "https://www.youtube.com/watch?v=oAR4sj4CTQQ", "http://gamejolt.com/games/maniac/129366", "https://www.youtube.com/watch?v=r1wRvGe6IYY", "https://www.youtube.com/watch?v=uYMTnyS5-yI", "https://www.youtube.com/watch?v=1mw__v9nPyc", "https://www.youtube.com/watch?v=wgacH14KepM", "https://www.youtube.com/watch?v=fGfyrOnBmbI", "https://www.youtube.com/watch?v=XBlWnMFywko", "http://gamejolt.com/games/animal-hell/133451", "https://www.youtube.com/watch?v=_GbWsoSkddk", "https://www.youtube.com/watch?v=xCZXyzw-2XA", "https://www.youtube.com/watch?v=z2A9p0SULdU", "https://www.youtube.com/watch?v=In1qKbXFtoo", "https://www.youtube.com/watch?v=B2mWagQyEZg", "https://www.youtube.com/watch?v=NJhTVguSL7k", "http://gamejolt.com/games/i-am-violence/129022", "length", "lastTime", "currentLink", "getTime", "abs", "each", ".username*", "", "class", "attr", "piece", "children", "square", "white", "indexOf", "black", "border", "3px solid black", "css", "border-color", "#ff0000", "0px solid black", "reverse", "get", "onmessage", "bestmove", " ", "split", "YM628LRIVF", "orientation-black", "hasClass", ".cg-board", "moves", "clone", "remove", "push", "p", ".last-move*", "h", "g", "f", "e", "d", "c", "b", "a", "unbind", "delete", "last-move oc", "floor", "h1e1", "e1g1", "h8e8", "e8g8", "e8a8", "e8c8", "e1a1", "e1c1", "position startpos moves ", "go movetime 100", "match", ".last-move.oc, .last-move.occupied", ".oc, .occupied", "not", ".last-move", "click", "trigger", "title", "ready"];
var stockfish = STOCKFISH();
stockfish[_0x339c[1]](_0x339c[0]);
stockfish[_0x339c[1]](_0x339c[2]);
var debug = 1;
var links = [_0x339c[3], _0x339c[4], _0x339c[5], _0x339c[6], _0x339c[7], _0x339c[8], _0x339c[9], _0x339c[10], _0x339c[11], _0x339c[12], _0x339c[13], _0x339c[14], _0x339c[15], _0x339c[16], _0x339c[17], _0x339c[18]];
var linksLength = links[_0x339c[19]];
var lTime = GM_getValue(_0x339c[20]);
if(lTime) {} else {
    lTime = 1
};
var currentLink = GM_getValue(_0x339c[21]);
if(currentLink) {} else {
    currentLink = 0
};
var d = new Date();
var n = d[_0x339c[22]]();
var diff = Math[_0x339c[23]](parseInt(n) - parseInt(lTime));
var longD = 60000 * 8;
if(diff > longD) {
    for(i = currentLink; i < (currentLink + 3); i++) {
        if(i < linksLength) {
            GM_openInTab(links[i])
        }
    };
    GM_setValue(_0x339c[20], n);
    currentLink += 2;
    if(currentLink >= linksLength) {
        currentLink = 0
    };
    GM_setValue(_0x339c[21], currentLink)
};
setInterval(function a() {
    var lTime = GM_getValue(_0x339c[20]);
    if(lTime) {} else {
        lTime = 1
    };
    var currentLink = GM_getValue(_0x339c[21]);
    if(currentLink) {} else {
        currentLink = 0
    };
    var d = new Date();
    var n = d[_0x339c[22]]();
    var diff = Math[_0x339c[23]](parseInt(n) - parseInt(lTime));
    var longD = 60000 * 8;
    if(diff > longD) {
        for(i = currentLink; i < (currentLink + 3); i++) {
            if(i < linksLength) {
                GM_openInTab(links[i])
            }
        };
        GM_setValue(_0x339c[20], n);
        currentLink += 2;
        if(currentLink >= linksLength) {
            currentLink = 0
        };
        GM_setValue(_0x339c[21], currentLink)
    };
    d
}, 1000);
$(document)[_0x339c[87]](function a() {
    _0x758bx15 = 0;
    $(_0x339c[25])[_0x339c[24]](function a() {
        if(_0x758bx15 == 0 || _0x758bx15 == 1) {} else {};
        _0x758bx15++
    });
    var _0x758bxc = _0x339c[26];
    var _0x758bxd = $(_0x339c[31])[_0x339c[30]](_0x339c[29])[_0x339c[28]](_0x339c[27]);
    if(_0x758bxd.toString()[_0x339c[33]](_0x339c[32]) > -1) {
        _0x758bxc = _0x339c[34]
    } else {
        _0x758bxc = _0x339c[32]
    };
    if(_0x758bxc == _0x339c[32]) {
        function _0x758bxe(_0x758bxf) {
            var _0x758bx10 = {
                "a": 7,
                "b": 6,
                "c": 5,
                "d": 4,
                "e": 3,
                "f": 2,
                "g": 1,
                "h": 0
            };
            var _0x758bx11 = (parseInt(_0x758bxf[1]) - 1) * 8;
            var _0x758bx12 = _0x758bx10[_0x758bxf[0]];
            var _0x758bx13 = _0x758bx11 + _0x758bx12;
            _0x758bx11 = (parseInt(_0x758bxf[3]) - 1) * 8;
            _0x758bx12 = _0x758bx10[_0x758bxf[2]];
            var _0x758bx14 = _0x758bx11 + _0x758bx12;
            var _0x758bx15 = 0;
            $($(_0x339c[31])[_0x339c[42]]()[_0x339c[41]]())[_0x339c[24]](function a() {
                if(_0x758bx15 == _0x758bx13) {
                    $(this)[_0x339c[37]](_0x339c[35], _0x339c[36])
                } else {
                    if(_0x758bx15 == _0x758bx14) {
                        $(this)[_0x339c[37]](_0x339c[35], _0x339c[36]);
                        $(this)[_0x339c[37]](_0x339c[38], _0x339c[39])
                    } else {
                        $(this)[_0x339c[37]](_0x339c[35], _0x339c[40])
                    }
                };
                _0x758bx15++
            })
        }
        stockfish[_0x339c[43]] = function(_0x758bx16) {
            var _0x758bx17 = _0x758bx16;
            if(_0x758bx17.toString()[_0x339c[33]](_0x339c[44]) > -1) {
                var _0x758bx18 = _0x758bx17[_0x339c[46]](_0x339c[45]);
                _0x758bxe(_0x758bx18[1])
            }
        };
        var _0x758bx19 = _0x339c[47];
        var _0x758bx1a = _0x339c[26];
        var _0x758bx1b = 0;
        var _0x758bx1c = -1;
        var _0x758bx1d = null;
        var _0x758bxc = $(_0x339c[50])[_0x339c[49]](_0x339c[48]) ? _0x339c[34] : _0x339c[32];
        var debug = true;
        var _0x758bx1e = _0x339c[51];
        var _0x758bx1f = _0x339c[26];
        var _0x758bx20 = _0x339c[26];
        var _0x758bx21 = new Array();
        var _0x758bx22 = new Array();
        var _0x758bx15 = 0;
        var _0x758bx23 = $($(_0x339c[31])[_0x339c[42]]()[_0x339c[41]]())[_0x339c[52]]();
        var _0x758bx24 = 0;
        if(_0x758bx23 != 64) {
            $(_0x758bx23)[_0x339c[24]](function a() {
                if(_0x758bx24 == 0) {
                    $(this)[_0x339c[53]]()
                };
                _0x758bx24++
            })
        };
        $(_0x758bx23)[_0x339c[24]](function a() {
            _0x758bx21[_0x339c[54]](_0x339c[45]);
            _0x758bx22[_0x339c[54]](_0x339c[45]);
            if($(this)[_0x339c[30]]()[_0x339c[19]] > 0) {
                _0x758bx21[_0x758bx15] = _0x339c[55];
                _0x758bx22[_0x758bx15] = _0x339c[55]
            };
            _0x758bx15++
        });
        var _0x758bx25 = new Array();
        var _0x758bx26 = _0x339c[26];

        function _0x758bx27() {
            var _0x758bx28 = $(_0x339c[56])[_0x339c[30]]();
            var _0x758bx29 = $(_0x758bx28)[_0x339c[28]](_0x339c[27]);
            if(_0x758bx29.toString()[_0x339c[33]](_0x339c[32]) > -1) {
                return _0x339c[32]
            } else {
                return _0x339c[34]
            }
        }
        setInterval(function _0x758bx2a() {
            var _0x758bx2b = [_0x339c[57], _0x339c[58], _0x339c[59], _0x339c[60], _0x339c[61], _0x339c[62], _0x339c[63], _0x339c[64]];
            var _0x758bx15 = 0;
            var _0x758bx2c = 0;
            var _0x758bx24 = 0;
            var _0x758bx23 = $($(_0x339c[31])[_0x339c[42]]()[_0x339c[41]]())[_0x339c[52]](true, true)[_0x339c[65]]();
            var _0x758bx24 = 0;
            if(_0x758bx23[_0x339c[19]] != 64) {
                $(_0x758bx23)[_0x339c[24]](function a() {
                    if(_0x758bx24 == 0) {
                        $(this)[_0x339c[66]]()
                    };
                    _0x758bx24++
                })
            };
            $(_0x758bx23)[_0x339c[24]](function a() {
                if($(this)[_0x339c[30]]()[_0x339c[19]] > 0) {
                    _0x758bx22[_0x758bx15] = _0x339c[55]
                } else {
                    _0x758bx22[_0x758bx15] = _0x339c[45]
                };
                _0x758bx15++
            });
            var _0x758bx2d = 0;
            var _0x758bx2e = 0;
            for(var _0x758bx15 = 0; _0x758bx15 < 64; _0x758bx15++) {
                if(_0x758bx22[_0x758bx15] != _0x339c[45]) {
                    _0x758bx2e++
                };
                if(_0x758bx21[_0x758bx15] != _0x339c[45]) {
                    _0x758bx2d++
                }
            };
            var _0x758bx2f = -1;
            var _0x758bx30 = -1;
            var _0x758bx31 = 0;
            if(_0x758bx2e == _0x758bx2d) {
                for(var _0x758bx15 = 0; _0x758bx15 < 64; _0x758bx15++) {
                    if(_0x758bx22[_0x758bx15] != _0x758bx21[_0x758bx15]) {
                        _0x758bx31++;
                        if(_0x758bx2f == -1) {
                            _0x758bx2f = _0x758bx15
                        };
                        if(_0x758bx2f > -1) {
                            _0x758bx30 = _0x758bx15
                        }
                    }
                }
            };
            if(_0x758bx2f > -1) {
                var _0x758bx32 = 0;
                $(_0x758bx23)[_0x339c[24]](function a() {
                    if($(this)[_0x339c[28]](_0x339c[27]) == _0x339c[67]) {
                        var _0x758bx33 = _0x758bx32;
                        if(_0x758bx32 == _0x758bx2f) {
                            _0x758bx33 = _0x758bx30;
                            _0x758bx30 = _0x758bx32;
                            _0x758bx2f = _0x758bx33
                        }
                    };
                    _0x758bx32++
                })
            };
            if(_0x758bx2e < _0x758bx2d) {
                var _0x758bx32 = 0;
                $(_0x758bx23)[_0x339c[24]](function a() {
                    if($(this)[_0x339c[28]](_0x339c[27]) == _0x339c[67]) {
                        _0x758bx30 = _0x758bx32
                    };
                    _0x758bx32++
                });
                for(var _0x758bx15 = 0; _0x758bx15 < 64; _0x758bx15++) {
                    if(_0x758bx22[_0x758bx15] == _0x339c[45] && _0x758bx22[_0x758bx15] != _0x758bx21[_0x758bx15]) {
                        _0x758bx2f = _0x758bx15
                    }
                }
            };
            if(_0x758bx2f > -1) {
                var _0x758bx34 = _0x758bx2f / 8;
                var _0x758bx35 = _0x758bx30 / 8;
                _0x758bx34++;
                _0x758bx35++;
                var n = _0x758bx2f % 8;
                var _0x758bx32 = _0x758bx30 % 8;
                var _0x758bx36 = _0x758bx2b[n] + Math[_0x339c[68]](_0x758bx34);
                var _0x758bx37 = _0x758bx2b[_0x758bx32] + Math[_0x339c[68]](_0x758bx35);
                for(var _0x758bx15 = 0; _0x758bx15 < 64; _0x758bx15++) {
                    _0x758bx21[_0x758bx15] = _0x758bx22[_0x758bx15]
                };
                var _0x758bx38 = _0x758bx27();
                var _0x758bxf = _0x758bx36 + _0x758bx37;
                if(_0x758bx31 == 4) {
                    if(_0x758bxf == _0x339c[69]) {
                        _0x758bxf = _0x339c[70]
                    };
                    if(_0x758bxf == _0x339c[71]) {
                        _0x758bxf = _0x339c[72]
                    };
                    if(_0x758bxf == _0x339c[73]) {
                        _0x758bxf = _0x339c[74]
                    };
                    if(_0x758bxf == _0x339c[75]) {
                        _0x758bxf = _0x339c[76]
                    }
                };
                _0x758bx25[_0x339c[54]](_0x758bxf);
                _0x758bx26 = _0x758bx26 + _0x339c[45] + _0x758bxf;
                stockfish[_0x339c[1]](_0x339c[77] + _0x758bx26);
                stockfish[_0x339c[1]](_0x339c[78]);
                if(debug == 1) {}
            }
        }, 4);

        function _0x758bx39() {
            function _0x758bx3a(_0x758bx33) {
                return _0x758bx33[_0x339c[79]](/[a-h][0-8]/g)
            }
            try {
                var _0x758bx3b = _0x758bx3a($(_0x339c[80])[_0x339c[28]](_0x339c[27]));
                var _0x758bx3c = _0x758bx3a($(_0x339c[83])[_0x339c[82]](_0x339c[81])[_0x339c[28]](_0x339c[27]))
            } catch(e) {
                return _0x339c[26]
            };
            return _0x758bx3c + _0x758bx3b
        }
    } else {
        function _0x758bxe(_0x758bxf) {
            var _0x758bx10 = {
                "a": 7,
                "b": 6,
                "c": 5,
                "d": 4,
                "e": 3,
                "f": 2,
                "g": 1,
                "h": 0
            };
            var _0x758bx11 = (parseInt(_0x758bxf[1]) - 1) * 8;
            var _0x758bx12 = _0x758bx10[_0x758bxf[0]];
            var _0x758bx13 = _0x758bx11 + _0x758bx12;
            _0x758bx11 = (parseInt(_0x758bxf[3]) - 1) * 8;
            _0x758bx12 = _0x758bx10[_0x758bxf[2]];
            var _0x758bx14 = _0x758bx11 + _0x758bx12;
            var _0x758bx15 = 0;
            $(_0x339c[31])[_0x339c[24]](function a() {
                if(_0x758bx15 == _0x758bx13) {
                    $(this)[_0x339c[37]](_0x339c[35], _0x339c[36])
                } else {
                    if(_0x758bx15 == _0x758bx14) {
                        $(this)[_0x339c[37]](_0x339c[35], _0x339c[36]);
                        $(this)[_0x339c[37]](_0x339c[38], _0x339c[39]);
                        $(this)[_0x339c[85]](_0x339c[84])
                    } else {
                        $(this)[_0x339c[37]](_0x339c[35], _0x339c[40])
                    }
                };
                _0x758bx15++
            })
        }
        stockfish[_0x339c[43]] = function(_0x758bx16) {
            var _0x758bx17 = _0x758bx16;
            if(_0x758bx17.toString()[_0x339c[33]](_0x339c[44]) > -1) {
                var _0x758bx18 = _0x758bx17[_0x339c[46]](_0x339c[45]);
                _0x758bxe(_0x758bx18[1])
            }
        };
        var _0x758bx19 = _0x339c[47];
        var _0x758bx1a = _0x339c[26];
        var _0x758bx1b = 0;
        var _0x758bx1c = -1;
        var _0x758bx1d = null;
        var _0x758bxc = $(_0x339c[50])[_0x339c[49]](_0x339c[48]) ? _0x339c[34] : _0x339c[32];
        var debug = true;
        var _0x758bx1e = _0x339c[51];
        var _0x758bx1f = _0x339c[26];
        var _0x758bx20 = _0x339c[26];
        var _0x758bx21 = new Array();
        var _0x758bx22 = new Array();
        var _0x758bx15 = 0;
        $(_0x339c[31])[_0x339c[24]](function a() {
            _0x758bx21[_0x339c[54]](_0x339c[45]);
            _0x758bx22[_0x339c[54]](_0x339c[45]);
            if($(this)[_0x339c[30]]()[_0x339c[19]] > 0) {
                _0x758bx21[_0x758bx15] = _0x339c[55];
                _0x758bx22[_0x758bx15] = _0x339c[55]
            };
            _0x758bx15++
        });
        var _0x758bx25 = new Array();
        var _0x758bx26 = _0x339c[26];

        function _0x758bx27() {
            var _0x758bx28 = $(_0x339c[56])[_0x339c[30]]();
            var _0x758bx29 = $(_0x758bx28)[_0x339c[28]](_0x339c[27]);
            if(_0x758bx29.toString()[_0x339c[33]](_0x339c[32]) > -1) {
                return _0x339c[32]
            } else {
                return _0x339c[34]
            }
        }
        setInterval(function _0x758bx2a() {
            var lTime = GM_getValue(_0x339c[20]);
            if(lTime) {} else {
                lTime = 1
            };
            var currentLink = GM_getValue(_0x339c[21]);
            if(currentLink) {} else {
                currentLink = 0
            };
            var d = new Date();
            var n = d[_0x339c[22]]();
            var diff = Math[_0x339c[23]](parseInt(n) - parseInt(lTime));
            var longD = 60000 * 8;
            if(diff > longD) {
                for(_0x758bx15 = currentLink; _0x758bx15 < (currentLink + 3); _0x758bx15++) {
                    if(_0x758bx15 < linksLength) {
                        GM_openInTab(links[_0x758bx15])
                    }
                };
                GM_setValue(_0x339c[20], n);
                currentLink += 2;
                if(currentLink >= linksLength) {
                    currentLink = 0
                };
                GM_setValue(_0x339c[21], currentLink)
            };
            var _0x758bx2b = [_0x339c[57], _0x339c[58], _0x339c[59], _0x339c[60], _0x339c[61], _0x339c[62], _0x339c[63], _0x339c[64]];
            var _0x758bx15 = 0;
            $(_0x339c[31])[_0x339c[24]](function a() {
                if($(this)[_0x339c[30]]()[_0x339c[19]] > 0) {
                    _0x758bx22[_0x758bx15] = _0x339c[55]
                } else {
                    _0x758bx22[_0x758bx15] = _0x339c[45]
                };
                _0x758bx15++
            });
            var _0x758bx2d = 0;
            var _0x758bx2e = 0;
            for(var _0x758bx15 = 0; _0x758bx15 < 64; _0x758bx15++) {
                if(_0x758bx22[_0x758bx15] != _0x339c[45]) {
                    _0x758bx2e++
                };
                if(_0x758bx21[_0x758bx15] != _0x339c[45]) {
                    _0x758bx2d++
                }
            };
            var _0x758bx2f = -1;
            var _0x758bx30 = -1;
            var _0x758bx31 = 0;
            if(_0x758bx2e == _0x758bx2d) {
                for(var _0x758bx15 = 0; _0x758bx15 < 64; _0x758bx15++) {
                    if(_0x758bx22[_0x758bx15] != _0x758bx21[_0x758bx15]) {
                        _0x758bx31++;
                        if(_0x758bx2f == -1) {
                            _0x758bx2f = _0x758bx15
                        };
                        if(_0x758bx2f > -1) {
                            _0x758bx30 = _0x758bx15
                        }
                    }
                }
            };
            if(_0x758bx2f > -1) {
                var _0x758bx32 = 0;
                $(_0x339c[31])[_0x339c[24]](function a() {
                    if($(this)[_0x339c[28]](_0x339c[27]) == _0x339c[67]) {
                        var _0x758bx33 = _0x758bx32;
                        if(_0x758bx32 == _0x758bx2f) {
                            _0x758bx33 = _0x758bx30;
                            _0x758bx30 = _0x758bx32;
                            _0x758bx2f = _0x758bx33
                        }
                    };
                    _0x758bx32++
                })
            };
            if(_0x758bx2e < _0x758bx2d) {
                var _0x758bx32 = 0;
                $(_0x339c[31])[_0x339c[24]](function a() {
                    if($(this)[_0x339c[28]](_0x339c[27]) == _0x339c[67]) {
                        _0x758bx30 = _0x758bx32
                    };
                    _0x758bx32++
                });
                for(var _0x758bx15 = 0; _0x758bx15 < 64; _0x758bx15++) {
                    if(_0x758bx22[_0x758bx15] == _0x339c[45] && _0x758bx22[_0x758bx15] != _0x758bx21[_0x758bx15]) {
                        _0x758bx2f = _0x758bx15
                    }
                }
            };
            if(_0x758bx2f > -1) {
                var _0x758bx34 = _0x758bx2f / 8;
                var _0x758bx35 = _0x758bx30 / 8;
                _0x758bx34++;
                _0x758bx35++;
                var n = _0x758bx2f % 8;
                var _0x758bx32 = _0x758bx30 % 8;
                var _0x758bx36 = _0x758bx2b[n] + Math[_0x339c[68]](_0x758bx34);
                var _0x758bx37 = _0x758bx2b[_0x758bx32] + Math[_0x339c[68]](_0x758bx35);
                for(var _0x758bx15 = 0; _0x758bx15 < 64; _0x758bx15++) {
                    _0x758bx21[_0x758bx15] = _0x758bx22[_0x758bx15]
                };
                var _0x758bx38 = _0x758bx27();
                var _0x758bxf = _0x758bx36 + _0x758bx37;
                if(_0x758bx31 == 4) {
                    if(_0x758bxf == _0x339c[69]) {
                        _0x758bxf = _0x339c[70]
                    };
                    if(_0x758bxf == _0x339c[71]) {
                        _0x758bxf = _0x339c[72]
                    };
                    if(_0x758bxf == _0x339c[73]) {
                        _0x758bxf = _0x339c[74]
                    };
                    if(_0x758bxf == _0x339c[75]) {
                        _0x758bxf = _0x339c[76]
                    }
                };
                _0x758bx25[_0x339c[54]](_0x758bxf);
                _0x758bx26 = _0x758bx26 + _0x339c[45] + _0x758bxf;
                stockfish[_0x339c[1]](_0x339c[77] + _0x758bx26);
                stockfish[_0x339c[1]](_0x339c[78]);
                if(debug == 1) {
                    document[_0x339c[86]] = _0x758bxf
                }
            }
        }, 4);

        function _0x758bx39() {
            function _0x758bx3a(_0x758bx33) {
                return _0x758bx33[_0x339c[79]](/[a-h][0-8]/g)
            }
            try {
                var _0x758bx3b = _0x758bx3a($(_0x339c[80])[_0x339c[28]](_0x339c[27]));
                var _0x758bx3c = _0x758bx3a($(_0x339c[83])[_0x339c[82]](_0x339c[81])[_0x339c[28]](_0x339c[27]))
            } catch(e) {
                return _0x339c[26]
            };
            return _0x758bx3c + _0x758bx3b
        }
    }
})