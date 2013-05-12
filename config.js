exports.Welcome = {
    file: "index.html"
};

exports.Compress = {
    match: /css|js|html/ig
};

exports.Expires = {
    fileMatch: /^(gif|png|jpg|js|css)$/ig,
    maxAge: 60*60*24*365
};