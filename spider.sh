#!/bin/bash
# 如何使用
# 将这个脚本放在 home 目录下 比如 /home/ubuntu
# 在 /etc/rc.local 文件里，语句 exit 0 这一行的前面加上 ./home/ubuntu/spider.sh 这句
# 保存 rc.local 后重启系统，脚本就会在每天指定的时间自动下载更新数据

while :
do
    current_date="`date +%c`" 
    echo $current_date
    if echo $current_date | grep "23时59分59秒" ; then
        echo "new data is downloading"
        curl "https://raw.githubusercontent.com/canghailan/Wuhan-2019-nCoV/master/Wuhan-2019-nCoV.json" >> "this_is_the_path/data/overall.json" # 这里改成 overall.json 的路径，比如 './home/2019ncov/data/overall.json', 我不知道你放在主机的哪里
    fi
done