module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('flatpickr', 'git://github.com/chmln/flatpickr');
  }
};
