const PubSub = {
  publish: function (channel, payload) {
    const event = new CustomEvent(channel, {
      detail: payload

    });
    console.log(`pub_sub is publishing on ${channel} with payload ${payload}`);
    document.dispatchEvent(event);
  },

  subscribe: function (channel, callback) {
    document.addEventListener(channel, callback);

  }
};

module.exports = PubSub;
