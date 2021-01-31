/**
 * imports...
 * author: YiDong Zhuo(snomiao@gmail.com)
 */
import './函式'
import './测试'
import './统计'
import './表列'

if (require.main === module) (async () => {
    console.log('你好, 世界');

})().then(console.log).catch(console.error)