module Enum
  class TaskStateEnum < Types::BaseEnum
    # 二つ目のvalueにenumで既に設定されている文字列を定義する
    # ここではわかりやすく一つ目のvalueを大文字で返すようにしています　　
    value 'unstarted', value: 'unstarted'
    value 'started', value: 'started'
    value 'finished', value: 'finished'
  end
end
