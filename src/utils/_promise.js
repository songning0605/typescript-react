/**
 * 1、从使用角度，创建Promise的时候要传入一个函数参数，Promise会给这个函数提供两个函数参数，成功回调resolve和失败回调reject
 *    所以Promise实现应该有resolve方法，和reject方法，传入的函数也会立即执行，并接收这两个参数
 */
class PromiseA {
  constructor(executor) {
    // success
    let resolve = () => { };
    // failed
    let reject = () => { };

    executor(resolve, reject);
  }
}

/**
 * 2、Promise有三种状态，pending, fulfilled, rejected
 *    pending是初始状态，可以转换为fulfilled（成功）或rejected（失败），并且是不可逆的。
 *    成功时，调用resolve，resolve会接收到一个不可改变的值value，状态由pending变为fulfilled
 *    失败的时候，调用reject，reject会接收到一个失败原因reason，状态由pending变为rejected
 *    如果executor执行出错，直接失败，调用reject函数
 */
class PromiseB {
  constructor(executor) {
    // state
    this.state = 'pending';
    // success value
    this.value = undefined;
    // failed
    this.reason = undefined;
    // success
    let resolve = value => {
      // state改变,resolve调用就会失败
      if (this.state === 'pending') {
        // resolve调用后，state转化为成功态
        this.state = 'fulfilled';
        // 储存成功的值
        this.value = value;
      }
    };
    // failed
    let reject = reason => {
      // state改变,reject调用就会失败
      if (this.state === 'pending') {
        // reject调用后，state转化为失败态
        this.state = 'rejected';
        // 存储失败的值
        this.reason = reason;
      }
    };
    // invoke executor，如果executor执行报错，直接执行reject
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }

  }
}

/**
 * 3、then方法
 *    Promise/A+规范规定，Promise要有一个then方法，可以接收两个函数参数 onFulfilled,onRejected ，onFulfilled 用来处理成功时的逻辑，onRejected用来处理失败时的逻辑
 *    状态变为成功时，执行onFulfilled方法，传入this.value，当状态为rejected时，执行onRejected，传入this.reason
 *    onFulfilled,onRejected如果他们是函数，则必须分别在fulfilled，rejected后被调用，value或reason依次作为他们的第一个参数
 */
class PromiseC {
  constructor() {
    // PromiseB的所有逻辑……
  }

  // then 方法 有两个参数onFulfilled onRejected
  then(onFulfilled, onRejected) {
    // 状态为fulfilled，执行onFulfilled，传入成功的值
    if (this.state === 'fulfilled') {
      onFulfilled(this.value);
    }
    // 状态为rejected，执行onRejected，传入失败的原因
    if (this.state === 'rejected') {
      onRejected(this.reason);
    }
  }
}

/**
 * 4、解决异步实现
 *    现在基本可以实现简单的同步代码，
 *        但是当resolve在setTomeout内执行，
 *        then时state还是pending等待状态 我们就需要在then调用的时候，
 *        将成功和失败存到各自的数组，一旦reject或者resolve，就调用它们
 * 
 *    类似于发布订阅，先将then里面的两个函数储存起来，由于一个promise可以有多个then，所以存在同一个数组内。成功或者失败时，forEach调用它们
 */
class PromiseD {
  constructor(executor) {
    // state
    this.state = 'pending';
    // success value
    this.value = undefined;
    // failed
    this.reason = undefined;
    // 存放成功的数组
    this.onResolvedCallbacks = [];
    // 存放失败回调的数组
    this.onRejectedCallbacks = [];
    // success
    let resolve = value => {
      // state改变,resolve调用就会失败
      if (this.state === 'pending') {
        // resolve调用后，state转化为成功态
        this.state = 'fulfilled';
        // 储存成功的值
        this.value = value;
        // 一旦resolve执行，调用成功数组的函数
        this.onResolvedCallbacks.forEach(fn => fn());
      }
    };
    // failed
    let reject = reason => {
      // state改变,reject调用就会失败
      if (this.state === 'pending') {
        // reject调用后，state转化为失败态
        this.state = 'rejected';
        // 存储失败的值
        this.reason = reason;
        // 一旦reject执行，调用失败数组的函数
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    };
    // invoke executor，如果executor执行报错，直接执行reject
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }

  }

  // then 方法 有两个参数onFulfilled onRejected
  then(onFulfilled, onRejected) {
    // 状态为fulfilled，执行onFulfilled，传入成功的值
    if (this.state === 'fulfilled') {
      onFulfilled(this.value);
    }
    // 状态为rejected，执行onRejected，传入失败的原因
    if (this.state === 'rejected') {
      onRejected(this.reason);
    }
  }
}