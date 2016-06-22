function roverMove(location,direction,grid){
    var rover = this;
    this.location = [x,y];
    this.direction = 'N'; //N by default;
    this.grid = [10,10]; //10*10 by default
    
    function move(command){
        var currDirection = rover.direction;
        var xMove, yMove;
        var newLocation;
        
        if(command = 'f'){
            if(currDirection == 'N' or currDirection == 'S'){
                xMove = 0;
                if(currDirection == 'N')
                    yMove = 1;
                else
                    yMove = -1;
            }else{
                yMove = 0;
                
                if(currDirection = 'E')
                    xMove = 1;
                else
                    xMove = -1;
            }
        }else{
            if(currDirection == 'N' or currDirection == 'S'){
                xMove = 0;
                if(currDirection == 'N')
                    yMove = -1;
                else
                    yMove = 1;
            }else{
                yMove = 0;
                if(currDirection = 'E')
                    xMove = -1;
                else
                    xMove = 1;
            }
        }
        
        newLocation = [(rover.location[0] + xMove),(rover.location[1] + yMove)];
        
        if(!foundObstacle(newLocation))
            if(newLocation[0] > rover.grid[0] || newLocation[1] > rover.grid[1] || newLocation[0] < 0 || newLocation[1] < 0 )
                rover.location = switchEdge(newLocation);
            else
                rover.location = newLocation;
        else{
            alert('Found an obstacle');
            return false;
        }
    }
    
    function turn(command) {
        var directions = ['N','E','S','W'];
        var currDirection = rover.direction;
        var directionIndex = directions.indexOf(currDirection);
        var newDirection;
        if (command === 'l') {
            if(directionIndex != 0)
               newDirection = directions[(directionIndex - 1)];
            else
                newDirection = directions[directions.length];
        } else {
            if(directionIndex != direction.length)
               newDirection = directions[(directionIndex + 1)];
            else
                newDirection = directions[0];
        }
        rover.direction = newDirection;
    }
    
    function foundObstacle(newLocation){
        if(rover.grid.newLocation.status == ‘obstacle’)
            return true;
        else
            return false;
    }
    
    function switchEdge(newLocation){
        var xNew;
        var yNew;
        if(newLocation[0] > rover.grid[0])
            xNew = newLocation[0] - rover.grid[0];
        if(newLocation[1] > rover.grid[1])
            yNew = newLocation[1] - rover.grid[1];
        if(newLocation[0] < 0)
            xNew = newLocation[0] + rover.grid[0];
        if(newLocation[1] < 0)
            yNew = newLocation[1] + rover.grid[1];
        return [xNew,yNew];
    }
}