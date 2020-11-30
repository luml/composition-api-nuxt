import dayis from 'dayjs';
import vue from 'vue';

vue.filter('timeFormat', function(value) {
    return dayis(value).format('YYYY-MM-DD HH:mm:ss')
})

vue.filter('timeFormatDate', function(value) {
    return dayis(value).format('YYYY-MM-DD');
});
