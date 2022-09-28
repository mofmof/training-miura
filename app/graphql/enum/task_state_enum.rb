module Enum
  class TaskStateEnum < Types::BaseEnum
    value 'unstarted', value: 'unstarted'
    value 'started', value: 'started'
    value 'finished', value: 'finished'
  end
end
