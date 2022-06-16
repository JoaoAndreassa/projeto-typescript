"use strict";
var job;
(function (job) {
    job[job["padeiro"] = 0] = "padeiro";
    job[job["atriz"] = 1] = "atriz";
})(job || (job = {}));
const maria = {
    nome: "maria",
    idade: 29,
    job: job.atriz
};
const roberto = {
    nome: "roberto",
    idade: 19,
    job: job.padeiro
};
const laura = {
    nome: "laura",
    idade: 32,
    job: job.atriz
};
const carlos = {
    nome: "carlos",
    idade: 19,
    job: job.padeiro
};
