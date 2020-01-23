var config = {
    total: 450, //总人数
    defaultMember:[]//内定中奖用户名单, 数组中元素是指用户的name, 索引越小的元素中奖的优先级越高. eg: defaultMember: ['430','020'], 优先级函数为P, 则P('430') > P('020') > P(others)
}
