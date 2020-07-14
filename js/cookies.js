document.addEventListener("DOMContentLoaded", function() {
    Cookies.set('triple_stimulus_voucher', '行政院振興三倍券');
    console.log(Cookies.get('triple_stimulus_voucher'));
    Cookies.remove('triple_stimulus_voucher');
    console.log(Cookies.get('triple_stimulus_voucher'));
});