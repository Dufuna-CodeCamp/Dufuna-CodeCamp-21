var productList = [
    {
        Name  : 'Google pixel 6',
        Image : 'https://www.ebay.com/itm/325315530528?epid=6050345563&hash=item4bbe510f20:g:6rwAAOSwOklioN6s&amdata=enc%3AAQAIAAAA4KlFpdLS6PH8UqCSpPV9zjpKcngVNJ%2Fs2gX6bcLEFnRctPv9hYDo8r7A%2F9Fpmtnvb8er5Qi3VN6iC%2FqNy1rS0tkleXZP23%2Fyes%2FyWIoPlRdSsbMXo%2BJGV1ZT0hr%2BmkAxqdVekO6lMvlPkhEKiC%2FFbigKrNpvlp0FkYqaa76bfJpaT6AHVduKy3T0cmplkMSvKPDPZZtpxBri1ZCcoapJKKSOFEHNWj%2BGR4XserRNNfuiWuOwKFPp4D1Gmc6BBR6FSO1s3cIHSgbsJ%2FxYj%2FN41NgwwMi2HtEkvL4EJ6lY%2B9HC%7Ctkp%3ABFBMjrLd1oli',
        Price : 'K50'
    },

    {
        Name  : 'Google pixel 6 pro',
        Image : 'https://www.ebay.com/itm/145089909095?epid=2321383088&hash=item21c8085167:g:REMAAOSw85VkXN65&amdata=enc%3AAQAIAAAAwNrIlO3ULwA7tfNe8KuftSc8RcUgoXN%2BCU0R5mRLsMSiOcgcrhEcit2qsiVhEt5HuN0SFOOrWPHzcBOvwCZHhVKcnx3aNoDQbBgmUcDOMazK8e3geIwzv6O0mBrJNTZguWr%2BZxjj6Krpjtqthh2KL5HV%2BZd0G%2Ft%2B%2F0JXCeg9fr%2F8BT3DNGCsfas4Ao3dd96tCkSmDL3zm5%2F5QbY9cyijabETUtnnBR8tUF7WA6k2sIKfdgQhQjJ1iZyb5XogQewe7g%3D%3D%7Ctkp%3ABk9SR9ad6taJYg',
        Price : 'K70'
    },

    {
        Name  : 'Google pixel 5a',
        Image : 'https://www.ebay.com/itm/325185502957?hash=item4bb690feed:g:EuUAAOSw03xie~R~&amdata=enc%3AAQAIAAAA4MII5NJXKDpzFSObIC5ZzfZs3jp7CCXilSUIRUBdWzski99A6VbQqdSJwyGvEyoWdC%2FFkXmx3fLrCAomJKzsUJokSVi0GOi%2Fz6pQTDNGSwAqld4CECFAGcoDPT8InNEUWsLpsnQP0LMKNb6Cr95XNqWPxvQeQ%2B2GrQpROW4TJ0R4Dyt2A4dmOySFYtiZq2z6wGbTvoc3syaJZywyYm4b0xvmfiP30M8mjOMReAIAOggyb3%2FyVQep2clBR0C09WrUFT2gbGtO2At6ckhIwG4%2BOSTw%2BOgFk1JztF24nQqwCWED%7Ctkp%3ABFBM3reH14li',
        Price : 'K90'
    }
]

for ( var k=0; k <= productList.length; k++ ) {
    let product = productList[k];
    document.write ( product.Name + " " + "<br />" + 'with' + " " + product.Image + " " + "<br />" + 'is sold for' + " " + product.Price + "<br /><br />" );
}

console.log(productList);